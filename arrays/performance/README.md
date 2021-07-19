## Task 2

a) What is the performance, in terms of, Big O notation, of the below code?
b) Write a solution that has better performance
c) What is the performance of your new solution?

```javascript
const domains = { // Example to show data shape only.
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
  "four.com": { policy: "block" },
}

const getBlockPolicyState = (domains) => {
  numDomains = Object.keys(domains).length;
  for (let i = 0; i < numDomains; i++) {
    policyArr.push(Object.entries(domains)[i][1].policy);
  }
  oneDomain = policyArr.some((item) => item === "block");
  allDomains = policyArr.every((item) => item === "block");
  return { oneDomain, allDomains };
};
```

## Answers
To calculate big O we need to follow these steps:
1. Break the code and consider each line isolated
2. Assume the worst case
3. Remove constants ( that means that `O(C*n)` becomes `O(n)`)
4. Use different terms for inputs ( `O(n) !== O(a+b)` )
5. Drop any non dominants ( `O(n) + O(n<sup>2</sup>`) becomes `O(n<sup>2</sup>`) )

### a
Let's break down the code in pieces
```javascript
numDomains = Object.keys(domains).length;
```
its time complexity is `O(n)`, as it depends on the amount of input elements (domains)
```javascript
for (let i = 0; i < numDomains; i++) {
  ...
}
```
again, O(n) for the same reason

but,
```javascript
policyArr.push(Object.entries(domains)[i][1].policy);
```
has an `Object.entries` operation which is performed `n` times, that means `O(n*n)` or `O(n<sup>2</sup>)`, like a nested loop

```javascript
oneDomain = policyArr.some((item) => item === "block");
allDomains = policyArr.every((item) => item === "block");
```
those 2 needs to loop over the whole array (worst case) to find if "all" or "some" of the elements satisfy the condition, so `O(n)` again

Summing up, we have 
`O(3n+n<sup>2</sup>)`
and applying rule 5, we have `O(n<sup>2</sup>)`

### b
Rewriting the code:
```javascript
const getBlockPolicyStateImproved = (domains) => {
  let oneDomain = false;
  let allDomains = false;
  Object.values(domains).forEach( domain => {
    oneDomain = oneDomain || domain.policy === "block";
    allDomains = allDomains && domain.policy === "block";
  })
  return { oneDomain, allDomains };
};
```
We can use the same loop iteration through domain values to calculate both output variables. This way, we are saving some iterations and reducing complexity. 

### c
This solution is `O(n)` cause it only depends on the amount of items in domains input variable. It has 2 loops, one to get all the values and one to iterate over them, but they are not nested, so `O(2n)` becomes `O(n)`

### bonus point: tests results
To make a test with a specific amount of domains you can type
```sh
node .\arrays\performance\test.js 2
```
where 2 is the number of domains

If you don't type a number and just run the program, it will make some tests for 10, 1000, 10000 and 20000 domains to compare the results. It may take a while, depending on your computer :)

As you can see, the results are self explanatory
```
Testing for 10 domains
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyState took 1.3702009916305542 milliseconds.
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyStateImproved took 0.26350098848342896 milliseconds.
Testing for 1000 domains
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyState took 425.6226990222931 milliseconds.
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyStateImproved took 0.3986999988555908 milliseconds.
Testing for 10000 domains
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyState took 53915.028999984264 milliseconds.
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyStateImproved took 5.466399967670441 milliseconds.
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyState took 478649.5911999941 milliseconds.
{ oneDomain: true, allDomains: false }
Call to getBlockPolicyStateImproved took 21.84560000896454 milliseconds.
```
looking at how the numbers increases between tests, you can get a clear idea about how important is to write the right code for the right things

![Results](/screenshots/array_performance.png?raw=true "Performance changes when code is not optimized")


