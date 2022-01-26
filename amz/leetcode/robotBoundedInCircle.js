/**
 * @param {string} instructions
 * @return {boolean}
 */
 var isRobotBounded = function(instructions) {
  //     N     W       S      E
let dirs = [[0,1],[-1,0],[0,-1],[1,0]];
let x = 0;
let y = 0;

let idx = 0;
for (let move of instructions) {
if (move === 'L') {
   idx = (idx + 1) % 4;
} else if (move === 'R') {
   idx = (idx + 3) % 4;
} else {
   x += dirs[idx][0];
   y += dirs[idx][1];
}
}
return (x === 0 && y === 0) || (idx !== 0);
};