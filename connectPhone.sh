#!/bin/sh

#Connect to Android
#Start up video feed

#This assumes that activateWifi.sh was successfully run

#MotoX's MAC address
#14:1a:a3:63:d4:d1 -> bluetooth?
#14:1a:a3:63:d4:d2 -> normal wifi
#14:1a:a3:63:d4:d3 -> Wifi direct

# Galaxy S3 MAC
#8a:32:9b:03:0b:6b -> Wifi Direct

#Join after being invited.
#wpa_cli -ip2p-dev-wlan0 p2p_connect 14:1a:a3:63:d4:d3 pbc join
#wpa_cli -ip2p-dev-wlan0 p2p_connect 14:1a:a3:63:d4:d3 pbc persistent \
#go_intent=10

stdout_log="/var/log/edicam.log"
stderr_log="/var/log/edicam.err"

#Start the web server
cd ../edi-cam/web/server
nohup node server.js >> "$stdout_log" 2>> "$stderr_log" &
echo $! > ~/server.pid

exit 0
