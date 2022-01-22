//global variables
var ul = document.querySelector('ul');
var input_txt = document.getElementById('user_input') //input box
var submit = document.querySelector('.submit')         // submit button
var clear_list = document.querySelector('.clear_list')  // clear list button
var clear_checked = document.querySelector('.clear_checked') // clear checked button
//var menu = document.getElementById('menu')


function clearItemsChecked() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked')
    for (let i = 0; i < checked.length; i++) {

        console.log(checked[i].parentElement);
        ul.removeChild(checked[i].parentElement);

    }

}

function createListElement() {

    if (!input_txt.value.trim()) {   // if all white spaces are entered then trim() 
        alert('Please enter a valid list item');
        return;
    }
    var list_node = document.createElement('li')
    list_node.appendChild(document.createTextNode(input_txt.value));
    user_input.value = ''
    var check_box = document.createElement('input')
    check_box.setAttribute('type', 'checkbox')

    list_node.appendChild(check_box)
    ul.appendChild(list_node)

}

function input_length() {

    return input_txt.value.length

}

function addListAfterClick() {
    if (input_length() > 0) {
        createListElement();
    }

}

function addListAfterEnter(event) {

    if (input_length() > 0 && event.key === 'Enter') {

        createListElement();
    }

}

function clearListAfterClick() {

    while (ul.firstChild) {

        ul.removeChild(ul.firstChild)
    }

}

submit.addEventListener('click', addListAfterClick)

input_txt.addEventListener('keypress', addListAfterEnter)

clear_list.addEventListener('click', clearListAfterClick)

clear_checked.addEventListener('click', clearItemsChecked)

