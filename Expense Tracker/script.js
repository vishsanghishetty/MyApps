/* 
Expense Category declarations
*/
const expense_housing = document.querySelector('.expense-housing')  //outside container that holds expense category
const expense_category_cols = document.querySelector('.expense-category-cols'); //container that holds all 3 expenses

/* 
Housing Expense Category declarations
*/
const housing_expense_add_btn = document.querySelector('i#housing-btn');
const housing_exp_input = document.querySelector('.housing-expense-amt');
const housing_dropdown = document.querySelector('#housing');
let housing_exp_balance = document.querySelector('.housing-exp-balance');
let totalHousing = 0;
housing_exp_balance.innerHTML = totalHousing;

function displayHousingExpenseListCards() {

    calculateHousingExpenses();
    let housingDivElement = document.createElement('div');
    housingDivElement.className = 'housing-expense-list-wrapper';
    const optionSelected = housing_dropdown.options[housing_dropdown.selectedIndex];

    let housingListItem = document.createElement('div');
    housingListItem.className = 'housing-expense-list-item';
    housingListItem.textContent = `${optionSelected.text} - ${housing_exp_input.value}`;
    housingDivElement.appendChild(housingListItem);
    document.querySelector('main').appendChild(housingDivElement);

}

function calculateHousingExpenses() {
    let housing_input = `${housing_exp_input.value}`;
    totalHousing = totalHousing + parseInt(housing_input);
    housing_exp_balance.innerHTML = totalHousing;
    console.log(housing_exp_balance.innerHTML = totalHousing);
}


/* 
Living Expense Category declarations
*/
const living_expense_add_btn = document.querySelector('i#living-btn');
const living_exp_input = document.querySelector('.living-expense-amt');
const living_dropdown = document.querySelector('#living');

let living_exp_balance = document.querySelector('.living-exp-balance');
let totalLiving = 0;
living_exp_balance.innerHTML = totalLiving;

function displayLivingExpenseListCards() {

    calculateLivingExpenses();
    let livingDivElement = document.createElement('div');
    livingDivElement.className = 'living-expense-list-wrapper';
    const optionSelected = living_dropdown.options[living_dropdown.selectedIndex];

    let livingListItem = document.createElement('div');
    livingListItem.className = 'living-expense-list-item';
    livingListItem.textContent = `${optionSelected.text} - ${living_exp_input.value}`;
    livingDivElement.appendChild(livingListItem);
    document.querySelector('main').appendChild(livingDivElement);
}

function calculateLivingExpenses() {
    let living_input = `${living_exp_input.value}`;
    totalLiving = totalLiving + parseInt(living_input);
    living_exp_balance.innerHTML = totalLiving;
    console.log(living_exp_balance.innerHTML = totalLiving);
}

/* 
Long-term Expense Category declarations
*/
const lgtm_expense_add_btn = document.querySelector('i#lgtm-btn');
const lgtm_exp_input = document.querySelector('.lgtm-expense-amt');
const lgtm_dropdown = document.querySelector('#lgtm');

let lgtm_exp_balance = document.querySelector('.lgtm-exp-balance');
let totalLongTerm = 0;
lgtm_exp_balance.innerHTML = totalLongTerm;

function displayLongTermExpenseListCards() {

    calculateLongTermExpenses();
    let lgtmDivElement = document.createElement('div');
    lgtmDivElement.className = 'lgtm-expense-list-wrapper';
    const optionSelected = lgtm_dropdown.options[lgtm_dropdown.selectedIndex];

    let lgtmListItem = document.createElement('div');
    lgtmListItem.className = 'lgtm-expense-list-item';
    lgtmListItem.textContent = `${optionSelected.text} - ${lgtm_exp_input.value}`;
    lgtmDivElement.appendChild(lgtmListItem);
    document.querySelector('main').appendChild(lgtmDivElement);
}

function calculateLongTermExpenses() {
    let lgtm_input = `${lgtm_exp_input.value}`;
    totalLongTerm = totalLongTerm + parseInt(lgtm_input);
    lgtm_exp_balance.innerHTML = totalLongTerm;
    console.log(lgtm_exp_balance.innerHTML = totalLongTerm);
}


housing_expense_add_btn.addEventListener('click', displayHousingExpenseListCards)
living_expense_add_btn.addEventListener('click', displayLivingExpenseListCards)
lgtm_expense_add_btn.addEventListener('click', displayLongTermExpenseListCards)

/*
Calculate Total Expenses and Balance declarations
*/

const calculate_btn = document.querySelector('.calculate');
const income_input = document.querySelector('.income');
let your_expenses = document.querySelector('.col-right p')
let your_balance = document.querySelector('.col-left p')

const calculateBalance = () => {

    let totalExpenses = `${totalHousing + totalLiving + totalLongTerm}`;
    let income = parseInt(income_input.value);
    console.log(income);
    console.log(`Total Expenses is ${totalExpenses}`);

    let totalBalance = `${income - totalExpenses}`;
    console.log(`Total Balance is ${totalBalance}`);

    your_expenses.innerHTML = totalExpenses;

    income > 0 ? your_balance.innerHTML = totalBalance : alert("Please enter your income correctly in the income field");
}




calculate_btn.addEventListener('click', calculateBalance)
