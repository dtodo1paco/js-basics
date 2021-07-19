
// task8 = [
//   [2,5,1,2,3,5,1,2,4], Should return 2
//   [2,1,1,2,3,5,1,2,4], Should return 1
//   [2,3,4,5], Should return undefined
//   [2,5,5,2,3,5,1,2,4] Should return 5
// ]

const firstDupeValue = (list) => {
  const dict = {};
  let found = 0;
  for(let i=0; i < list.length && !found; i++) {
    const value = list[i];
    if (dict.hasOwnProperty(value)) {
      found = i;
    }
    dict[value] = true;
  }
  return found ? list[found] : undefined;
};
console.log(`[2,5,1,2,3,5,1,2,4], Should return ${firstDupeValue([2,5,1,2,3,5,1,2,4])}`)
console.log(`[2,1,1,2,3,5,1,2,4], Should return ${firstDupeValue([2,1,1,2,3,5,1,2,4])}`)
console.log(`[2,3,4,5], Should return ${firstDupeValue([2,3,4,5])}`)
console.log(`[2,5,5,2,3,5,1,2,4], Should return ${firstDupeValue([2,5,5,2,3,5,1,2,4])}`)