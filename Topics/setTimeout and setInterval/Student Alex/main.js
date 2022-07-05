function showName(name) {
    return(`Hello, student ${name}!`);
}

const studentGreeting = setInterval(() => console.log(showName));
clearInterval(studentGreeting);