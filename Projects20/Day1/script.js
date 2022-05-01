const form = document.getElementById('form');
const form_control = document.querySelector('.form-control');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password2');

//Show input error message
const showError = (input, message) => {

    const form_control = input.parentElement; //whichever input is passed it's parent element (form_control)
    form_control.className = 'form-control error';  //replacing the class name to include error in order to show the validation error using css
    const small = form_control.querySelector('small');
    small.innerText = message;
}

//Show input success message
const showSuccess = (input) => {
    const form_control = input.parentElement; //whichever input is passed it's parent element
    form_control.className = 'form-control success';
}

const isEmailValid = (email) => {
    const reg_exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return String(email)
        .toLowerCase()
        .match(reg_exp);
}

const checkRequired = (inputArr) => {

    inputArr.forEach((input) => {

        if (input.value.trim() === '') {
            showError(input, `${getInputId(input)} is required`); //showError(element, message)
        }
        else {
            showSuccess(input);
        }

    })

    function getInputId(input) {
        console.log(input.id.charAt(0) + input.id.slice(1));
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);

    }


}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputArray = [username, email, password, passwordConfirmation];
    checkRequired(inputArray);
});