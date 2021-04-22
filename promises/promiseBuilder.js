// builder for successfull promise
const promiseBuilder = (id) => {
  console.log("promiseBuilder: creating a new Promise " + id);
  const callback = function(resolve, reject) {
    console.log(`myPromise[${id}]: start`)
    setTimeout(
      () => {
        console.log(`myPromise[${id}]: time to be true`)
        resolve(true);
      }, 
      1000
    );
    console.log(`myPromise[${id}]: end`);
  }
  return new Promise(callback);
}

function test() {
  const id = `1`;
  const promise1 = promiseBuilder(id);
  promise1
    .then( result => {
      console.log(`testing [${id}]: got a result`, result);
    })
    .catch( error => {
      console.log(`testing [${id}]: got an error`, error);
    })
}

test();

// Addenda: customize the callback using parameters for the promiseBuilder function
// make it resolve or reject based on a param