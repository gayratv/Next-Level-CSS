/*
 * Copyright (c) 2022. Write by Gayrat
 */

const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  // const fileStream = fs.createReadStream('./моё/diigo/4950948_csv_2022_03_24_4568b.csv');
  const fileStream = fs.createReadStream('J:/_prg/1/Next Level CSS Creative Hover & Animation Effects/моё/diigo/4950948_csv_2022_03_24_4568b.csv');

  const rl = readline.createInterface({
    input: fileStream,
    // output: process.stdout,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  const header="title,url,tags,description,comments,annotations,created\n";
  let outp =header;
  let cnt=0;
  let batchInd=0;
  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    // console.log(`Line from file: ${line}`);
    cnt++;
    console.log(cnt);
    outp+=line+'\n';
    if (cnt > 147) {

      fs.writeFileSync(`./batch/b${++batchInd}.csv`,      outp);
      cnt=0;
      outp=header;
      // break;
    }

  }
  if (cnt > 0) {
    fs.writeFileSync(`./batch/b${++batchInd}.csv`,      outp);
  }
}

processLineByLine();
