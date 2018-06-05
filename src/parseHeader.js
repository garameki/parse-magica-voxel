const readId = require('./readId.js');
const intByteLength = 5;

module.exports = function parseHeader(Buffer){
  var ret = {};
  var id = readId(Buffer,0);

console.log("header = ",id);

  ret[id] = Buffer.readInt32LE(intByteLength);

  return ret;
};
