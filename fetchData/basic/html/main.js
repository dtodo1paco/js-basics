async function fetchData(url) {
  let response = await fetch(url);
  let commits = await response.json(); // read response body and parse as JSON
  return commits;
}

const urlInputElement = document.getElementById('urlInput');
const fetchCommitsElement = document.getElementById('fetchCommits');

fetchCommitsElement.addEventListener('click', () => {
  const url = `${urlInputElement.value}/commits`;
  fetchData(url);
})

// Addenda: make validation on the url set as input
// Addenda: fix the URL so we are sure it ends with /commits
// Addenda: fill the table with the commits received