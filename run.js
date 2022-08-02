
const { exec } = require('node:child_process');
exec("C:\\Users\\TuyenLeQuang\\AppData\\Local\\Programs\\Python\\Python310\\python.exe C:\\Users\\TuyenLeQuang\\AppData\\Local\\Programs\\Python\\Python310\\005.py", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  //console.error(`stderr: ${stderr}`);
});

