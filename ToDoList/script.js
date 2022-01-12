//global variables
let ul = document.querySelector('ul');
let input_txt = document.getElementById('user_input') //input from the input box
let submit = document.querySelector('.submit')         // submit button
let clear_list = document.querySelector('.clear_list')  // clear list button
let btn = document.getElementsByClassName('button')

function createListElement() {
        
        let list_node = document.createElement('li')
        list_node.appendChild(document.createTextNode(input_txt.value));
        user_input.value = ''
        let btn_x = document.createElement('button')
        btn_x.textContent = ' X '
        
        list_node.appendChild(btn_x)
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

input_txt.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()
        document.querySelector('.submit').click()
    }
}) 

clear_list.addEventListener('click', function () {
    const menu = document.getElementById('menu')
    while (menu.firstChild) {
        
            menu.removeChild(menu.firstChild)
        }
    
})

submit.addEventListener('click', addListAfterClick)
  


    

