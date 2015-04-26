//Require things
var util = require('util');
var bleno = require('../node_modules/bleno');

var BatteryLevelCharacteristic = require('./battery-level-characteristic');
var ActivateWIFICharacteristic = require('./activate-wifi-characteristic');
var GetAddressCharacteristic = require('./get-address-characteristic');
var ShutdownCharacteristic = require('./shutdown-characteristic');


function ParallelService() {
  ParallelService.super_.call(this, {
    uuid: '5b580496-d85f-4cd0-8001-46ff648c706c',
    characteristics: [
      new BatteryLevelCharacteristic(),
      new ActivateWIFICharacteristic(),
      new GetAddressCharacteristic(),
      new ShutdownCharacteristic()
    ]
  });
}

util.inherits(ParallelService, bleno.PrimaryService);

module.exports = ParallelService;
