@echo off
title Servidor Local CUN SST
echo Iniciando servidor local para el Curso de Reinduccion SST...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0iniciar_servidor.ps1"
pause
