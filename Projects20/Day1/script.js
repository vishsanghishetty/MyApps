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

const checkEmail = (input) => {
    const reg_exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (reg_exp.test(input.value.trim())) {

        showSuccess(input);
    }
    else {
        showError(input, `${getFieldName(input)} must be valid`)

    }
}


const checkRequired = (inputArr) => {

    inputArr.forEach((input) => {

        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`); //showError(element, message)
        }
        else {
            showSuccess(input);
        }

    })

}
function getFieldName(input) {
    console.log(input.id.charAt(0) + input.id.slice(1));
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}
const checkLength = (input, min, max) => {

    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else {
        showSuccess(input);
    }
}

const checkPasswordsMatch = (password, confirmPassword) => {

    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match')
    }
    else {

        showSuccess(password);
        showSuccess(confirmPassword);
    }
}

//Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputArray = [username, email, password, passwordConfirmation];
    checkRequired(inputArray); //checking all the required fields
    checkLength(username, 3, 15); //username field
    checkLength(password, 6, 20); //password field
    checkEmail(email);
    checkPasswordsMatch(password, passwordConfirmation);
});