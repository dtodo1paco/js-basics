// successfull promise
const promiseTrue = new Promise(
  (resolve, reject) => {
    console.log("promiseTrue: start")
    setTimeout(
      () => {
        console.log("promiseTrue: time to be true")
        resolve(true);
      }, 
      1000
    );
    console.log("promiseTrue: end")
  }
)
.then( result => {
  console.log("promiseTrue: I got a promiseTrue result", result);
})
.catch( error => {
  console.log("promiseTrue: I got a promiseTrue error", error);
})

// failing promise
const promiseError = new Promise(
  (resolve, reject) => {
    console.log("promiseError: start")
    setTimeout(
      () => {
        console.log("promiseError: time to trigger an error")
        reject(new Error("Oh my god!!!"));
      }, 
      1500
    );
    console.log("promiseError: end")
  }
)
.then( result => {
  console.log("promiseError: I got a promiseError result", result);
})
.catch( error => {
  console.log("promiseError: I got a promiseError error", error);
})