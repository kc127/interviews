/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  let res = [];

  intervals.sort((a,b) => a[0]-b[0]);
  res.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
      let prev = res[res.length - 1];
      let curr = intervals[i];
      if (curr[0] <= prev[1]){
          res.pop();
          res.push([prev[0],Math.max(prev[1],curr[1])]);
      } else {
          res.push(curr);
      }
  }
  return res;
};