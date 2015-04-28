#!/bin/sh

#Shuts down the camera
#Disables wifi direct

wpa_cli -ip2p-dev-wlan0 p2p_stop_find
wpa_cli p2p_group_remove `wpa_cli interface | grep 'p2p-wlan0'`


#(server.js) and 
#nohup node server.js >> "$stdout_log" 2>> "$stderr_log" &

kill `cat ~/server.pid`

exit 0
