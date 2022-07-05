const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce(function arrExpenses(expense, cost) {
        return expense - cost;
    }, salary);

    console.log(remainingSalary);
}