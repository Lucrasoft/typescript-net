@echo off
REM simple build script 

tsc.exe -d -t ES5 -m CommonJS --out .\Compiled\System.Debug.js System.ts


del .\Compiled\System.d.ts
ren .\Compiled\System.Debug.d.ts .\Compiled\System.d.ts 


REM test script

cd tests
dir *.ts / b > specs.lst
echo ../Compiled/System.debug.d.ts >> specs.lst
tsc -m commonjs -t ES5 --out specs.js @specs.lst
cd ..