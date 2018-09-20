const https = require('https');
const argv = require('yargs')
  .usage('Usage: $0 [options]')
  .example('$0 -u https://developer.mozilla.org/en-US/docs/Web/API/Request -t 3000', 'keep request an URL per 3, 000ms.')
  .alias('u', 'url')
  .alias('t', 'timeout')
  .describe('u', 'URL to be requested')
  .describe('t', 'Timeout interval per request')
  .demandOption(['u'])
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2018')
  .argv;

setInterval(() => {
  let tr = require('tor-request');
  tr.request('https://api.ipify.org', function (err, res, body) {
    if (!err && res.statusCode == 200) {
      console.log("Your public (through Tor) IP is: " + body);
      tr.request(argv.url, function (err, res) {
        if (!err && res.statusCode == 200) {
          console.log(`Request OK: ${argv.url}`);
        } else {
          console.error('Request error: ' + err);
        }
      });
    } else {
      console.error('Request error: ' + err);
    }
  });
}, argv.timeout || 3000);