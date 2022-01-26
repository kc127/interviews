/*
Alexa is given n piles of equal or unequal heights. In one step, Alexa can remove any number of boxes from the pile which has the maximum height and try to make it equal to the one which is just lower than the maximum height of the stack. Determine the minimum number of steps required to make all of the piles equal in height.

Example 1:

Input: piles = [5, 2, 1]
Output: 3
Explanation:

Step 1: reducing 5 -> 2 [2, 2, 1]
Step 2: reducing 2 -> 1 [2, 1, 1]
Step 3: reducing 2 -> 1 [1, 1, 1]
So final number of steps required is 3.
*/

Example 2:

input: [5,5,6,2,1] output: 8

sort (o(nlogn)

traverse the array
check if curr elem is greater than next elem
[5,5,5,2,1] 1 step from 6 to 5
[2,2,2,2,1] 3 steps from 5 to 2
[1,1,1,1,1] 4 steps from 4 to 1

[6,6,5,5,2,1]
 i   j
 while (arr[j] !== arr[i])
  j++;
 from i to j - 1, convert arr[i] to arr[j]
    [5,5,5,5,2,1]
    [5,5,5,5,2,1]
     i       j
    [2,2,2,2,2,1]
     i

     [1, 1, 2, 2, 2, 3, 3, 3, 4, 4]
     [4, 4, 3, 3, 3, 3, 3, 3, 1, 1]
      i     j

*/

function minSteps(arr) {
  let i = 0;
  let j = 0;
  let steps = 0;
  arr.sort((a,b) => b-a);
  while (j < arr.length) {
     while (j < arr.length && arr[i] === arr[j]){
        j++;
     }

     for (let k = i; k < j && j < arr.length; k++) {
        arr[k] = arr[j];
        steps += 1;
     }
  }
  return steps;
}
console.log(minSteps([5, 2, 1]), " expect 3");
console.log(minSteps([1, 1, 2, 2, 2, 3, 3, 3, 4, 4]), " expect 15");
4,5,5,4,2
console.log(minSteps([4, 5, 5, 4, 2]), " expect 6");
