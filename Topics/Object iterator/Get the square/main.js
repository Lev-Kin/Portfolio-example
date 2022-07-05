function getTheSquare(arrayOfObjects) {
    arrayOfObjects.forEach((e) => {
        let s = e["source"];
        e["square"] = Math.sqrt(s);
    });

    return arrayOfObjects;
}