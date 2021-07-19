const { performance } = require('perf_hooks');
const { argv } = require('process');

const domains = { // Example to show data shape only.
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
  "four.com": { policy: "block" },
}

const createDomain = (i) => ({ policy: ((new Date().getTime()) % i === 0) ? "block" : "none" })

const policyArr = [];
const getBlockPolicyState = (domains) => {
  numDomains = Object.keys(domains).length;
  for (let i = 0; i < numDomains; i++) {
    policyArr.push(Object.entries(domains)[i][1].policy);
  }
  oneDomain = policyArr.some((item) => item === "block");
  allDomains = policyArr.every((item) => item === "block");
  return { oneDomain, allDomains };
};

const getBlockPolicyStateImproved = (domains) => {
  let oneDomain = false;
  let allDomains = false;
  Object.values(domains).forEach( domain => {
    oneDomain = oneDomain || domain.policy === "block";
    allDomains = allDomains && domain.policy === "block";
  })
  return { oneDomain, allDomains };
};

const doTestFor = (numberOfDomains) => {
  console.log(`Testing for ${numberOfDomains} domains`)
  const aLotOfDomains = {};
  [...Array(numberOfDomains).keys()].forEach( k => aLotOfDomains[`email_${k}.com`] = createDomain(k))
  console.log(`   ${numberOfDomains} getBlockPolicyState`)
  const t0 = performance.now()
  const r1 = getBlockPolicyState(aLotOfDomains);
  const t1 = performance.now()
  console.log(r1);
  console.log("Call to getBlockPolicyState took " + (t1 - t0) + " milliseconds.")
  
  console.log(`   ${numberOfDomains} getBlockPolicyStateImproved`)
  const t2 = performance.now()
  const r2 = getBlockPolicyStateImproved(aLotOfDomains);
  const t3 = performance.now()
  console.log(r2);
  console.log("Call to getBlockPolicyStateImproved took " + (t3 - t2) + " milliseconds.")  
  return {
    getBlockPolicyState: t1 - t0,
    getBlockPolicyStateImproved: t3 - t2,
  }
}

// main program
const howManyDomains = argv[2];
if (howManyDomains) {
  doTestFor(howManyDomains);
} else {
  const results = [10,1000,10000,20000].map( n => doTestFor(n));
  console.log(results)
}


