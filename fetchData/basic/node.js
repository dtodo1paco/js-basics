const fetch = require('node-fetch');

const url = 'https://api.github.com/repos/dtodo1paco/js-basics/commits';

async function fetchData() {
  let response = await fetch(url);
  let commits = await response.json(); // read response body and parse as JSON
  console.log(`last commit`, commits[0]);
}

fetchData();
