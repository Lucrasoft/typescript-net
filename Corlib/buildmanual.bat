@echo off
REM simple build script 

tsc.exe -d -t ES5 -m CommonJS --out .\Compiled\Corlib.Debug.js Corlib.ts


del .\Compiled\Corlib.d.ts
ren .\Compiled\Corlib.Debug.d.ts .\Compiled\Corlib.d.ts 


REM test script

cd tests
dir *.ts / b > specs.lst
echo ../Compiled/Corlib.debug.d.ts >> specs.lst
tsc -m commonjs -t ES5 --out specs.js @specs.lst
cd ..