// selecting all the elements
const start_button = document.querySelector('.btn-start button');
const info_box = document.querySelector(".info-box");
const exit_button = document.querySelector(".exit");
const continue_button = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz-box");
const option_list = document.querySelector(".option-list");




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
    showQuestion(0);

}

const showQuestion = (index) => {

    const ques_text = document.querySelector(".ques-text");

    let question_tag = '<span>' + questions[index].number + "." + questions[index].question + '</span>';

    ques_text.innerHTML = question_tag; //adding the question span tag to ques_text element as inner html

    let option_tag = "<div class= 'option'><span>" + questions[index].options[0] + "</span></div>" +
        "<div class= 'option'><span>" + questions[index].options[1] + "</span></div>" +
        "<div class= 'option'><span>" + questions[index].options[2] + "</span></div>" +
        "<div class= 'option'><span>" + questions[index].options[3] + "</span></div>";
    // adding all the options to the option list tag with div and span tags

    option_list.innerHTML = option_tag; //adding the option tag (with div and span) to option_list element as inner html




}
