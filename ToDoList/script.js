//global variables
let ul = document.querySelector('ul');
let input_txt = document.getElementById('user_input') //input box
let submit = document.querySelector('.submit')         // submit button
let clear_list = document.querySelector('.clear_list')  // clear list button
let btn = document.getElementsByClassName('button')

function createListElement() {
    
    if(!input_txt.value.trim()){   // if all white spaces are entered then trim() 
        alert('Please enter a valid list item');
        return;
      }
        let list_node = document.createElement('li')
        list_node.appendChild(document.createTextNode(input_txt.value.trim()));
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

function addListAfterEnter(event) {

    if (input_length() > 0 && event.key === 'Enter') {
    
        createListElement();
}

}

function clearListAfterClick()
{
    const menu = document.getElementById('menu')
    while (menu.firstChild) {
        
            menu.removeChild(menu.firstChild)
        }
    
}

submit.addEventListener('click', addListAfterClick)
  
input_txt.addEventListener('keypress', addListAfterEnter)

clear_list.addEventListener('click', clearListAfterClick)    

