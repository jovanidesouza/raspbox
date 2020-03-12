import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
GPIO.setwarnings(False)
GPIO.setup(7, GPIO.OUT)

while(1):
	GPIO.output(7, 1)
	time.sleep(10)
	GPIO.output(7, 0)
	time.sleep(5)
