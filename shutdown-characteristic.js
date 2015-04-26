//Require things
var util = require('util');
var bleno = require('../node_modules/bleno');
var os = require('os');
var child_process = require('child_process')

//Some basics
var BlenoPrimaryService = bleno.PrimaryService;
var BlenoCharacteristic = bleno.Characteristic;
var BlenoDescriptor = bleno.Descriptor;

var ShutdownCharacteristic = function() {
  ShutdownCharacteristic.super_.call(this, {
    uuid: '4de865c5-5f02-4891-b9f1-d2f8e4f6f806',
    properties: ['read']
  });
};

util.inherits(ShutdownCharacteristic, BlenoCharacteristic);

ShutdownCharacteristic.prototype.onReadRequest = function(offset, callback) {
  var result = this.RESULT_SUCCESS;
  //var data = new Buffer('TEST');
  //console.log('Fake-running hack script ' + data);
  console.log('Shutting down.');
  console.log(child_process.execSync('./shutdown.sh', { encoding: 'utf8' }));
  //console.log(child_process.exec('./activateWifi.sh', { encoding: 'utf8' }));

  var data = new Buffer('0');
  console.log('Ran shut down script');

  if (offset > data.length) {
    result = this.RESULT_INVALID_OFFSET;
    data = null;
  }

  callback(result, data);
};

module.exports = ShutdownCharacteristic;

