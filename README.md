# RaspBox

> **RaspBox** is a Home Server Powered by [Raspberry Pi](https://www.raspberrypi.org/)



## Setup

### Hardware
- Raspberry pi 3
- Sd Card
- Hard Drive
- Power Suply 5V 6A
- Mini ITX Case

### Software
- Raspberry pi OS
- Raspberry pi Imager
- Docker
- Portainer
- Samba server


## Install and Update Raspberry Pi OS
- [Raspberry Pi Imager](https://www.raspberrypi.com/news/raspberry-pi-imager-imaging-utility/)
- Enable SSH on Raspberry Pi OS Congig page

## Install Docker

`curl -sSL https://get.docker.com | sh`

## Install Portainer to manage Docker containers

`docker run -d --restart always --name portainer --privileged -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v /home/pi/data/portainer:/data portainer/portainer`



