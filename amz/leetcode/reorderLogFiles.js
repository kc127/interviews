/*

1. split each log
2. for each log, use Number.isDigit(parseInt(x)) to check if it's a digit
3. if yes, push to digitLogs, if no, push to letterLogs
4. while pushing to letterLogs, split the log into identifier and content
5. in a different loop outside, sort the letterLogs
     - by comparing the content
     - if content is the same, compare identifiers
     - use a.localeCompare(b) as a comparator function for sort

*/

/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
  let letter = [];
  let dig = [];
  let res = [];
  for (let log of logs) {
      let items = log.split(' ');
      if(Number.isInteger(parseInt(items[1]))) {
          dig.push(log);
      } else {
         letter.push([items[0],items.slice(1).join(' ')])
      }
  }

  letter.sort((a,b) => (c = a[1].localeCompare(b[1])) ? c : a[0].localeCompare(b[0]));
  res = letter.map(val => (val.join(' '))).concat(dig)

  return res;
};