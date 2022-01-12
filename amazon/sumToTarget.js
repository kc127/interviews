/*
Given a positive integer, target, print all possible combinations of positive integers that sum up to target.

target => 5
output => 1 1 1 1 1
          1 1 1 2
          1 1 3
          1 4
          2 3
          1 2 2

key is combination => meaning order does not matter
backtracking

*/

let sumToTarget = (n) => {
  let paths = [];

  let findPath = (path, pathSum, start) => {
    if (pathSum === n) {
      paths.push(Array.from(path));
      return paths;
    }

    for (let i = start; i < n; i++) {
      if (pathSum < n) {
        pathSum += i;
        path.push(i);
        findPath(path, pathSum, i);
        path.pop();
        pathSum -= i;
      }
    }
  }
  findPath([], 0, 1);
  return paths;
}

console.log(sumToTarget(5));