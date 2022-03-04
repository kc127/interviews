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


async function getMovieList(year) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/movies?Year=<year>
    let url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
    let p = new Promise((resolve, reject) => {
        const req = https.get(url, res => {
            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', chunk => {
                rawData += chunk;
            })
            res.on('end', () => {
                let parsedData = JSON.parse(rawData);
                let movieTitles = [];
                for (let movie of parsedData.data) {
                    movieTitles.push(movie.Title);
                }
                resolve(movieTitles);
            })
        })
        req.on('error', err => {
            reject(err.message);
        })
    })
    return await p;
}

async function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = readLine().trim();

  const results = await getMovieList(year);

  if (results.length > 0) {
      for (const result of results) {
        ws.write(`${result}\n`);
      }
  } else {
       ws.write('No Results Found');
  }

  ws.end();
}