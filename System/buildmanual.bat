@echo off

REM simple build script 

tsc.exe -d -t ES5 -m CommonJS --out .\Compiled\System.Debug.js System.ts
