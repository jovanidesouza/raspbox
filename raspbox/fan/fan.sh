#!/bin/sh
# launcher.sh
# navigate to home directory, then to this directory, then execute python script, then back home

cd /
cd home/raspbox/fan
sudo python fan.py &
cd /
cd home/raspbox/button
sudo python button.py &
cd /
