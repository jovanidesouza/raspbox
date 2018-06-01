import RPi.GPIO as GPIO
import time
import os
import commands

GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)

GPIO.setup(11, GPIO.OUT)

GPIO.output(11, 1)
time.sleep(0.5)
GPIO.output(11, 0)
time.sleep(0.5)
GPIO.output(11, 1)
time.sleep(0.5)
GPIO.output(11, 0)
time.sleep(0.5)
GPIO.output(11, 1)
time.sleep(0.5)
GPIO.output(11, 0)
time.sleep(0.5)
GPIO.output(11, 1)
time.sleep(0.5)
GPIO.output(11, 0)
time.sleep(0.5)
GPIO.output(11, 1)
time.sleep(0.5)
GPIO.output(11, 0)
time.sleep(0.5)

os.system("sudo /sbin/shutdown -h now")
