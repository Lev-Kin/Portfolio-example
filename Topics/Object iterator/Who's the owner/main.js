function switchTheValues(cats) {
    cats.forEach((e) => {
        let name = e["owner"];
        let owner = e["name"];
        let breed = e["breed"];
        console.log(`${owner} has a cat named ${name}, whose breed is ${breed}`);
    });

}