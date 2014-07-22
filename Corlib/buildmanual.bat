@echo off
REM simple build script 

tsc.exe -d -t ES5 -m CommonJS --out .\Compiled\Corlib.Debug.js Corlib.ts

cd compiled
del Corlib.d.ts
ren Corlib.Debug.d.ts Corlib.d.ts 
cd ..


REM test script

cd tests
dir *.ts / b > specs.lst
echo ../Compiled/Corlib.d.ts >> specs.lst
tsc -m commonjs -t ES5 --out specs.js @specs.lst
cd ..


