import RPi.GPIO as GPIO
import os
import commands

GPIO.setmode(GPIO.BOARD)

GPIO.setup(37, GPIO.IN, pull_up_down=GPIO.PUD_UP)

while (1):
	input_state = GPIO.input(37)
	if input_state == False:
		os.system("python /home/raspbox/leds/leds.py &")
