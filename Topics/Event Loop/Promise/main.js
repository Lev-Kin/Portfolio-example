setTimeout(() => console.log("timeout"));

Promise.resolve()
    .then(() => console.log("promise"));

Promise.reject()
    .catch(() => console.log("microtask"));

console.log("code");