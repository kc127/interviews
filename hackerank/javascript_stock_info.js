'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}


async function getStockInformation(date) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/stocks?date=<date>
    let url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`;

    let p = new Promise((resolve, reject) => {
        const req = https.get(url, (res) => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];
            let error;
            if (statusCode !== 200) {
                error = new Error(`Request Failed with statusCode: ${statusCode}`);
            } else if (!/^application\/json/.test(contentType)) {
                error = new Error('Invalid content-type.\n' + `Expected application/json bbut received ${contentType}`);
            }
            if (error) {
                console.log(error.message);
                res.resume();
                return;
            }

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => {
                rawData += chunk;
            });

            res.on('end', () => {
                console.log("here", rawData)

                let parsedData = JSON.parse(rawData);
                if (parsedData.data[0] === null || parsedData.data[0] === undefined) {
                    parsedData.data[0] = {};
                }
                resolve(parsedData.data[0]);
            })
        })
        req.on('error', (err) => {
            reject(err.message);
        })

    });
    return await p;
}
async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const date = readLine().trim();

  const result = await getStockInformation(date);
  const isEmpty = !Object.keys(result).length;
  if (isEmpty) {
      ws.write('No Results Found');
  } else {
      ws.write(`Open: ${result.open}\n`);
      ws.write(`High: ${result.high}\n`);
      ws.write(`Low: ${result.low}\n`);
      ws.write(`Close: ${result.close}\n`);
  }
}