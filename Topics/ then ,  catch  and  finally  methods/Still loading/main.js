function loader(value) {
    const promise = new Promise(function (resolve, reject) {
        if (value === "true") {
            resolve("The info has loaded.");
        } else {
            reject("Please, try again later.");
        }

    });

    return promise
        .then((response) => {
            console.log(response);
            return response;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
        .finally(function stopLoader() {
            console.log("Hello, Mr. Smith!");
        });

}