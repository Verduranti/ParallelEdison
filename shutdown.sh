#!/bin/sh

#Shuts down the camera
#Disables wifi direct

#(server.js) and 
#nohup node server.js >> "$stdout_log" 2>> "$stderr_log" &

kill `cat ~/server.pid`

exit 0
