// selecting all the elements
const start_button = document.querySelector('.btn-start button');
const info_box = document.querySelector(".info-box");
const exit_button = document.querySelector(".exit");
const continue_button = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz-box");




function showQuizRules() {

    info_box.classList.add("activeInfo"); //show info box

}
start_button.addEventListener('click', showQuizRules);

/* another way to write
 start_button.onclick = () => {
    info_box.classList.add("activeInfo"); //show info box
} */

exit_button.onclick = () => {

    info_box.classList.remove("activeInfo"); //exit info box

}

continue_button.onclick = () => {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box

}


