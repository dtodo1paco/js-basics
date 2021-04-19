// Complete the findNumber function below.
function findNumber(arr, k) {
  if (arr && Array.isArray(arr)) {
    const newArr = arr.slice(1, arr.length-1);
    if (newArr.includes(k)) {
      return "YES";
    }
  }
  return "NO";
}

console.log("is number: " + findNumber([5,1,2,3,4,5,1],1));