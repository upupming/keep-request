# keep-request

Keeping request a web page using different IP addresses.

## Install proxychains and Tor 

```bash
$ sudo apt install proxychains tor
```

## Start Tor

```bash
$ tor
$ lsof -i :9050
COMMAND   PID       USER   FD   TYPE  DEVICE SIZE/OFF NODE NAME
tor     13225 debian-tor    6u  IPv4 9710958      0t0  TCP localhost:9050 (LISTEN)
```

## Configure proxychains

```bash
$ sudo vi /etc/proxychains.conf

# In the file, make sure these lines exist:
  [ProxyList]
  # add proxy here ...
  # meanwile
  # defaults set to "tor"
  socks4  127.0.0.1 9050
```

## Run app.js

```bash
npm run request -- -u https://github.com -t 3000
```