# ==========================================================
# Servidor Local HTTP en PowerShell (Versión Resiliente)
# Diseñado para el Curso de Reinducción SST - CUN
# ==========================================================

$port = 8080
$started = $false
$listener = New-Object System.Net.HttpListener
$lastErrors = @()

# Intentar en un rango de puertos del 8080 al 8100
while (-not $started -and $port -lt 8100) {
    # 1. Intentar con 127.0.0.1 (suele saltarse restricciones de URL ACL de Windows)
    try {
        $listener.Prefixes.Clear()
        $listener.Prefixes.Add("http://127.0.0.1:$port/")
        $listener.Start()
        $started = $true
        $bindingAddress = "http://127.0.0.1:$port"
    } catch {
        $err1 = $_.Exception.Message
        
        # 2. Si falla, intentar con localhost
        try {
            $listener.Prefixes.Clear()
            $listener.Prefixes.Add("http://localhost:$port/")
            $listener.Start()
            $started = $true
            $bindingAddress = "http://localhost:$port"
        } catch {
            $err2 = $_.Exception.Message
            $lastErrors += "Puerto $port (127.0.0.1): $err1"
            $lastErrors += "Puerto $port (localhost): $err2"
            $port++
        }
    }
}

# Si falló en ese rango, probar con otros puertos comunes
if (-not $started) {
    $alternativePorts = @(3000, 5000, 8000, 9000, 9090)
    foreach ($altPort in $alternativePorts) {
        try {
            $listener.Prefixes.Clear()
            $listener.Prefixes.Add("http://127.0.0.1:$altPort/")
            $listener.Start()
            $port = $altPort
            $started = $true
            $bindingAddress = "http://127.0.0.1:$altPort"
            break
        } catch {
            $err1 = $_.Exception.Message
            try {
                $listener.Prefixes.Clear()
                $listener.Prefixes.Add("http://localhost:$altPort/")
                $listener.Start()
                $port = $altPort
                $started = $true
                $bindingAddress = "http://localhost:$altPort"
                break
            } catch {
                $err2 = $_.Exception.Message
                $lastErrors += "Puerto $altPort (127.0.0.1): $err1"
                $lastErrors += "Puerto $altPort (localhost): $err2"
            }
        }
    }
}

if (-not $started) {
    Write-Host "==========================================================" -ForegroundColor Red
    Write-Host "ERROR: No se pudo iniciar el servidor web local" -ForegroundColor Red
    Write-Host "==========================================================" -ForegroundColor Red
    Write-Host "Detalles de los errores encontrados:" -ForegroundColor Yellow
    foreach ($err in $lastErrors[0..5]) { # Mostrar los primeros 6 errores
        Write-Host " - $err" -ForegroundColor Gray
    }
    Write-Host "`nSi el error es 'Acceso denegado', por favor ejecuta 'iniciar_servidor.bat' como ADMINISTRADOR (Clic derecho -> Ejecutar como administrador)." -ForegroundColor Cyan
    Write-Host "==========================================================" -ForegroundColor Red
    Read-Host "Presiona Enter para salir..."
    exit
}

Write-Host "==========================================================" -ForegroundColor Green
Write-Host " Servidor Local Iniciado Correctamente" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Green
Write-Host "Dirección: $bindingAddress" -ForegroundColor Cyan
Write-Host "Carpeta:   $PSScriptRoot" -ForegroundColor Cyan
Write-Host "Presiona Ctrl+C en esta ventana para detener el servidor." -ForegroundColor Yellow
Write-Host "==========================================================" -ForegroundColor Green

# Abrir el navegador automáticamente en la dirección vinculada
Start-Process $bindingAddress

try {
    while ($listener.IsListening) {
        $context = $null
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response

            # Obtener la ruta relativa
            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/") {
                $urlPath = "/index.html"
            }

            # Ruta física del archivo
            $cleanPath = $urlPath.Replace('/', '\')
            $filePath = Join-Path $PSScriptRoot $cleanPath

            if (Test-Path $filePath -PathType Leaf) {
                # Determinar el tipo MIME
                $extension = [System.IO.Path]::GetExtension($filePath).ToLower()
                $mimeType = switch ($extension) {
                    ".html" { "text/html; charset=utf-8" }
                    ".htm" { "text/html; charset=utf-8" }
                    ".css" { "text/css; charset=utf-8" }
                    ".js" { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png" { "image/png" }
                    ".jpg" { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".gif" { "image/gif" }
                    ".svg" { "image/svg+xml" }
                    ".mp4" { "video/mp4" }
                    ".mp3" { "audio/mpeg" }
                    ".pdf" { "application/pdf" }
                    default { "application/octet-stream" }
                }

                try {
                    $bytes = [System.IO.File]::ReadAllBytes($filePath)
                    $response.ContentType = $mimeType
                    $response.ContentLength64 = $bytes.Length
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                } catch {
                    try {
                        $response.StatusCode = 500
                        $errorMessage = "Error 500 - No se pudo leer el archivo: $_"
                        $bytes = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
                        $response.ContentType = "text/plain; charset=utf-8"
                        $response.ContentLength64 = $bytes.Length
                        $response.OutputStream.Write($bytes, 0, $bytes.Length)
                    } catch {}
                }
            } else {
                # 404 Not Found
                try {
                    $response.StatusCode = 404
                    $errorMessage = "Error 404 - Archivo no encontrado: $urlPath"
                    $bytes = [System.Text.Encoding]::UTF8.GetBytes($errorMessage)
                    $response.ContentType = "text/plain; charset=utf-8"
                    $response.ContentLength64 = $bytes.Length
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                } catch {}
            }
            try {
                $response.Close()
            } catch {}
        } catch {
            Write-Host "Error al procesar petición: $_" -ForegroundColor Yellow
            if ($context -and $context.Response) {
                try { $context.Response.Close() } catch {}
            }
        }
    }
}
catch {
    if ($listener.IsListening) {
        Write-Host "Error en el ciclo del servidor: $_" -ForegroundColor Red
    }
}
finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
}
