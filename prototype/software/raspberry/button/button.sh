#!/bin/sh
# launcher.sh
# navigate to home directory, then execute python script, then back home

cd /
cd home/raspbox/button
sudo python button.py &
cd /
