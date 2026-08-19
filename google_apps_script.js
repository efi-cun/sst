/**
 * GOOGLE APPS SCRIPT - SINCRONIZACIÓN DE DATOS REINDUCCIÓN SST CUN
 * 
 * Instrucciones de instalación:
 * 1. Crea una nueva hoja de cálculo en Google Sheets (ej. "Reporte Reinducción SST").
 * 2. Cambia el nombre de la primera pestaña a "usuarios".
 * 3. Crea una segunda pestaña llamada "progreso".
 * 4. Crea una tercera pestaña llamada "notas".
 * 5. En el menú superior, ve a "Extensiones" -> "Apps Script".
 * 6. Borra todo el código existente y pega este script.
 * 7. Haz clic en el botón de guardar (icono de disco).
 * 8. Haz clic en "Implementar" -> "Nueva implementación".
 * 9. Selecciona el tipo "Aplicación web".
 * 10. Configura:
 *     - Descripción: "Sincronizador Curso SST"
 *     - Ejecutar como: "Tú (tu_correo@cun.edu.co)"
 *     - Quién tiene acceso: "Cualquiera" o "Cualquier persona" (Any)
 * 11. Haz clic en "Implementar". Otorga los permisos necesarios.
 * 12. Copia la URL de la aplicación web obtenida (Web App URL) y pégala en el archivo "js/google-sheets-config.js" de tu proyecto.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    // Esperar hasta 30 segundos para obtener el bloqueo y evitar colisiones de escritura simultánea
    lock.waitLock(30000);
    
    var requestData = JSON.parse(e.postData.contents);
    var action = requestData.action;
    var payload = requestData.data;
    
    var sheetApp = SpreadsheetApp.getActiveSpreadsheet();
    var result = { success: false };
    
    if (action === 'registerUser') {
      result = registerUser(sheetApp, payload);
    } else if (action === 'saveProgress') {
      result = saveProgress(sheetApp, payload);
    } else if (action === 'updateProgressFields') {
      result = updateProgressFields(sheetApp, payload);
    } else if (action === 'saveNote') {
      result = saveNote(sheetApp, payload);
    } else if (action === 'deleteNote') {
      result = deleteNote(sheetApp, payload);
    } else {
      throw new Error('Acción no soportada: ' + action);
    }
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// 1. REGISTRAR USUARIO
function registerUser(sheetApp, user) {
  var sheet = sheetApp.getSheetByName("usuarios");
  if (!sheet) {
    sheet = sheetApp.insertSheet("usuarios");
    sheet.appendRow(["cedula", "nombre", "email", "password", "created_at"]);
  }
  
  var data = sheet.getDataRange().getValues();
  var exists = false;
  
  // Buscar si ya existe la cédula o correo
  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString() === user.cedula.toString() || data[i][2].toString().toLowerCase() === user.email.toLowerCase()) {
      exists = true;
      break;
    }
  }
  
  if (exists) {
    return { success: false, message: 'Usuario ya registrado en Google Sheets' };
  }
  
  sheet.appendRow([
    user.cedula,
    user.nombre,
    user.email.toLowerCase(),
    user.password, // Base64
    new Date().toISOString()
  ]);
  
  // Inicializar progreso del usuario en Google Sheets
  var initProgress = {
    userId: user.cedula,
    nombre: user.nombre,
    correo: user.email.toLowerCase(),
    fechaInicio: new Date().toISOString().split('T')[0],
    fechaFin: "",
    progresoGeneral: 0,
    tiempoTotalSegundos: 0,
    cursoCompletado: false,
    certificadoGenerado: false,
    modulos: {
      modulo1: { completado: false, puntaje: 0, fechaCompletado: "" },
      modulo2: { completado: false, puntaje: 0, fechaCompletado: "" },
      modulo3: { completado: false, puntaje: 0, fechaCompletado: "" },
      modulo4: { completado: false, puntaje: 0, fechaCompletado: "" },
      modulo5: { completado: false, puntaje: 0, fechaCompletado: "" },
      modulo6: { completado: false, puntaje: 0, fechaCompletado: "" }
    }
  };
  saveProgress(sheetApp, initProgress);
  
  return { success: true };
}

// 2. GUARDAR PROGRESO COMPLETO
function saveProgress(sheetApp, progress) {
  var sheet = sheetApp.getSheetByName("progreso");
  if (!sheet) {
    sheet = sheetApp.insertSheet("progreso");
    sheet.appendRow([
      "user_id", "nombre", "correo", "fecha_inicio", "fecha_fin", "progreso_general", "tiempo_total_segundos", "curso_completado", "certificado_generado",
      "modulo1_completado", "modulo1_puntaje", "modulo1_fecha",
      "modulo2_completado", "modulo2_puntaje", "modulo2_fecha",
      "modulo3_completado", "modulo3_puntaje", "modulo3_fecha",
      "modulo4_completado", "modulo4_puntaje", "modulo4_fecha",
      "modulo5_completado", "modulo5_puntaje", "modulo5_fecha",
      "modulo6_completado", "modulo6_puntaje", "modulo6_fecha"
    ]);
  }
  
  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;
  
  // Buscar fila existente del usuario
  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString() === progress.userId.toString()) {
      rowIndex = i + 1; // +1 porque las filas de Sheets son indexadas desde 1 y hay encabezado
      break;
    }
  }
  
  var rowValues = [
    progress.userId,
    progress.nombre,
    progress.correo.toLowerCase(),
    progress.fechaInicio,
    progress.fechaFin || "",
    progress.progresoGeneral || 0,
    progress.tiempoTotalSegundos || 0,
    progress.cursoCompletado || false,
    progress.certificadoGenerado || false,
    
    progress.modulos.modulo1.completado || false,
    progress.modulos.modulo1.puntaje || 0,
    progress.modulos.modulo1.fechaCompletado || "",
    
    progress.modulos.modulo2.completado || false,
    progress.modulos.modulo2.puntaje || 0,
    progress.modulos.modulo2.fechaCompletado || "",
    
    progress.modulos.modulo3.completado || false,
    progress.modulos.modulo3.puntaje || 0,
    progress.modulos.modulo3.fechaCompletado || "",
    
    progress.modulos.modulo4.completado || false,
    progress.modulos.modulo4.puntaje || 0,
    progress.modulos.modulo4.fechaCompletado || "",
    
    progress.modulos.modulo5.completado || false,
    progress.modulos.modulo5.puntaje || 0,
    progress.modulos.modulo5.fechaCompletado || "",
    
    progress.modulos.modulo6.completado || false,
    progress.modulos.modulo6.puntaje || 0,
    progress.modulos.modulo6.fechaCompletado || ""
  ];
  
  if (rowIndex !== -1) {
    // Actualizar fila
    sheet.getRange(rowIndex, 1, 1, rowValues.length).setValues([rowValues]);
  } else {
    // Append fila nueva
    sheet.appendRow(rowValues);
  }
  
  return { success: true };
}

// 3. ACTUALIZAR CAMPOS INDIVIDUALES DE PROGRESO (Ej: tiempo)
function updateProgressFields(sheetApp, payload) {
  var sheet = sheetApp.getSheetByName("progreso");
  if (!sheet) return { success: false, message: 'La hoja de progreso no existe' };
  
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var rowIndex = -1;
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString() === payload.userId.toString()) {
      rowIndex = i + 1;
      break;
    }
  }
  
  if (rowIndex === -1) {
    return { success: false, message: 'Usuario de progreso no encontrado' };
  }
  
  // Actualizar sólo los campos provistos en payload.fields
  for (var fieldName in payload.fields) {
    var val = payload.fields[fieldName];
    // Mapear nombre de columna de BD a Google Sheets
    var colName = fieldName;
    if (fieldName === 'tiempo_total_segundos') colName = 'tiempo_total_segundos';
    if (fieldName === 'progreso_general') colName = 'progreso_general';
    if (fieldName === 'curso_completado') colName = 'curso_completado';
    if (fieldName === 'certificado_generado') colName = 'certificado_generado';
    
    var colIndex = headers.indexOf(colName);
    if (colIndex !== -1) {
      sheet.getRange(rowIndex, colIndex + 1).setValue(val);
    }
  }
  
  return { success: true };
}

// 4. GUARDAR NOTA
function saveNote(sheetApp, payload) {
  var sheet = sheetApp.getSheetByName("notas");
  if (!sheet) {
    sheet = sheetApp.insertSheet("notas");
    sheet.appendRow(["id", "user_id", "modulo", "texto", "fecha"]);
  }
  
  var data = sheet.getDataRange().getValues();
  var rowIndex = -1;
  var note = payload.note;
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString() === note.id.toString()) {
      rowIndex = i + 1;
      break;
    }
  }
  
  var rowValues = [
    note.id,
    payload.userId,
    note.modulo,
    note.texto,
    note.fecha
  ];
  
  if (rowIndex !== -1) {
    sheet.getRange(rowIndex, 1, 1, rowValues.length).setValues([rowValues]);
  } else {
    sheet.appendRow(rowValues);
  }
  
  return { success: true };
}

// 5. ELIMINAR NOTA
function deleteNote(sheetApp, payload) {
  var sheet = sheetApp.getSheetByName("notas");
  if (!sheet) return { success: true };
  
  var data = sheet.getDataRange().getValues();
  
  for (var i = 1; i < data.length; i++) {
    if (data[i][0].toString() === payload.noteId.toString()) {
      sheet.deleteRow(i + 1);
      break;
    }
  }
  
  return { success: true };
}
