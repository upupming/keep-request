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
  https.get(argv.url, res => {
    console.log('statusCode:', res.statusCode);
  });
}, argv.timeout || 3000);