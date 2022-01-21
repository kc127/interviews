/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a,b) => b[1] - a[1]);
  let totalUnits = 0;
  let boxCount = 0;
  for (let box of boxTypes) {
      boxCount = Math.min(box[0],truckSize)
      totalUnits += boxCount * box[1];
      truckSize -= boxCount;
      if (truckSize === 0) {
          break;
      }
  }
  return totalUnits;
};