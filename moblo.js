var fs = require('fs')

console.log('Abiriendo Archivoo');

var content = fs.readFileSync('el_quijote.txt','utf8')

console.log(content);
console.log(' Haciendo otra cosa');
console.log(process.uptime())