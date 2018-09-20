# keep-request

Keep requesting a web page using different IP addresses.

## Install Tor 

```bash
$ sudo apt install tor
```

## Configure Tor

```bash
$ sudo vi /etv/tor/torrc

# In the file, add the following line to change IP per 60s:
  MaxCircuitDirtiness 3
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


## Tips

  To run Tor and keep-request in background even if you disconnect your server SSH connection, you can run them in a new screen:

  ```bash
  $ screen -S tor
  $ tor
  # Use control+A, then D to detach the screen, then open another screen

  $ screen -S keep-proxy
  $ npm run request -- -u https://github.com -t 3000
  # Use control+A, then D to detach the screen
  ```