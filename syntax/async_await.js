
// this function will return true after 1 second (see the async keyword in front of function)
async function returnTrue() {
  
  // create a new promise inside of the async function
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(true), 1000) // resolve
  });
  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("un error"), 1000) // resolve
  });
  
  console.log("--- BEFORE ---");
  // wait for the promise to resolve
  let result = await promise;
   
  // console log the result (true)
  console.log(result);
  console.log("--- BEFORE2 ---");
  try {
    let result2 = await promise2;
    console.log(result2);
  } catch (e) {
    console.log("promise rejection handled");
  }

}

// call the function
returnTrue();
