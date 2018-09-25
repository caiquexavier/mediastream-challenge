'use strict';

console.log(`
2.
---

Take a look at the 'requester' function.

- What it does?
    - It makes a async rest call to an API and return a Promise;

- How it's used? Add different use-case examples that covers every functionality.
    - Use case in the code bellow, we have to initialize the requester function with API url and then resolve the promise to get results;

- How it is called this design pattern or technique?
    - Promise

HINT: Use https://api.github.com/users/mediastream
`);

// Add fetch polyfill for Node.js
require('isomorphic-fetch'); // See: https://github.com/matthew-andrews/isomorphic-fetch

function requester(method, base, headers = { Accept: '*/*' }) {
  return (path = []) => fetch((base ? [base, ...path] : path).join('/'), { method, headers })
    .then(r => r.json());
}


var apiURL = "https://api.github.com/users/mediastream"
var requesterCase = requester("GET", apiURL)
requesterCase().then( response => console.log("GET rest api reponse ==>", response))
