var fs = require('fs');
var parseMagicaVoxel = require('./parseMagicaVoxel.js');

fs.readFile("../example/aPiece.vox", function (err, Buffer) {
  if (err) throw err;
  console.log(JSON.stringify(parseMagicaVoxel(Buffer), null, 2));
});
