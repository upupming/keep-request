# keep-request

Keep requesting a web page using different IP addresses.

## Install Tor 

```bash
$ sudo apt install tor
```

## Configure and Tor

```bash
$ sudo vi /etv/tor/torrc

# In the file, add the following line to change IP per 60s:
  MaxCircuitDirtiness 60
```

## Start Tor

```bash
$ tor
$ lsof -i :9050
COMMAND   PID       USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
tor     13225 debian-tor    6u  IPv4 9710958      0t0  TCP localhost:9050 (LISTEN)

$ # If you want to kill tor, just run:
$ killall tor
```

## Run app.js

```bash
npm run request -- -u https://github.com -t 3000
```