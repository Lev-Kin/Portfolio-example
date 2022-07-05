function employeeAndCompany(employees) {
    employees.forEach((e) => {
        let name = e["name"];
        let company = e["company"];

        console.log(`Employee ${name} works for ${company}`);
    });

}