// selecting all the elements
const start_button = document.querySelector('.btn-start button');
const info_box = document.querySelector(".info-box");
const exit_button = document.querySelector(".exit");
const continue_button = document.querySelector(".continue");
const quiz_box = document.querySelector(".quiz-box");
const option_list = document.querySelector(".option-list");
//const prev_btn = document.querySelector("footer .prev-btn");
const next_btn = document.querySelector("footer .next-btn");
const timer_left_text = document.querySelector(".timer .time-left-text")
const timer_count = document.querySelector(".timer .timer-sec");
var wrong_answer_audio = document.querySelector("#wrong_answer_audio")
wrong_answer_audio.volume = 0.5;

console.log(timer_left_text);
console.log(timer_count.textContent);

let ques_count = 0;
let time_value = 20;
let index = 0;
let counter;

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
    showQuestion(index);
    start_timer(20);

}


const showQuestion = (index) => {

    const ques_text = document.querySelector(".ques-text");

    let question_tag = '<span>' + questions[index].number + ". " + questions[index].question + '</span>';

    ques_text.innerHTML = question_tag; //adding the question span tag to ques_text element as inner html

    let option_tag = "<div class= 'option'><span>" + questions[index].options[0] + "</span></div>" +
        "<div class='option'><span>" + questions[index].options[1] + "</span></div>" +
        "<div class='option'><span>" + questions[index].options[2] + "</span></div>" +
        "<div class='option'><span>" + questions[index].options[3] + "</span></div>";
    // adding all the options to the option list tag with div and span tags

    option_list.innerHTML = option_tag; //adding the option tag (with div and span) to option_list element as inner html

    const option = document.querySelectorAll('.option')

    //set onclick property to all the available options
    //and calling optionSelected callback function by passing the user clicked option as an argument
    for (let i = 0; i < option.length; i++) {

        option[i].setAttribute('onclick', "optionSelected(this)");

    }
    if (index >= 0 && index < 4) {

        next_btn.classList.add("show"); //show the previous button if user selected any option
        // prev_btn.classList.add("show"); //show the next button if user selected any option
    }

    if (index === 4) {
        next_btn.classList.remove("show");
        // prev_btn.classList.add("show");

    }

}

//creating div tags for check and cross icons for correct and incorrect answers

let check_tag = '<div class="check_icon"><i class="fas fa-check"></i></div>';
let cross_tag = '<div class="cross_icon"><i class="fas fa-times"></i></div>';


function optionSelected(answer) {
    clearInterval(counter);
    console.log(answer);
    let user_answer = answer.textContent;
    console.log("user answer is " + user_answer);
    const allOptions = option_list.children.length; // length of the list of options 4

    let correct_answer = questions[ques_count].answer;
    if (user_answer == correct_answer) {

        answer.classList.add('correct');
        answer.insertAdjacentHTML('beforeend', check_tag);
        console.log('correct answer');
    }
    else {
        wrong_answer_audio.play();
        answer.classList.add('incorrect');
        answer.insertAdjacentHTML('beforeend', cross_tag);
        console.log('wrong answer');

        for (let i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correct_answer) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML('beforeend', check_tag);
                console.log('Auto select the correct answer');
            }

        }
    }
    for (let i = 0; i < allOptions; i++) {

        option_list.children[i].classList.add("disabled");
    }

}
//let prev_counter = 0;
const next_btnClick = () => {
    index++;

    if (ques_count < questions.length - 1) {

        ques_count++;
        showQuestion(index);
        clearInterval(counter); //clear previous set interval
        start_timer(time_value); // start the new timer
        timer_left_text.textContent = "Time Left";
        //prev_counter = ques_count;
    }

}


// const prev_btnClick = () => {
//     index--;
//     if (prev_counter < questions.length + 1) {
//         prev_counter--;
//         showQuestion(prev_counter);
//         clearInterval(counter); //clear previous set interval
//         start_timer(time_value); // start the new timer
//         timer_left_text.textContent = "Time Left";
//         ques_count--;

//     }

// }

function start_timer(time) {
    const time_up_txt = "Time Up!"
    let time_up_img = '<span class="time_up_icon"><i class="fas fa-hourglass-end fa-fw fa-spin fa-2x"></i></span>';
    counter = setInterval(myTimer, 1000);

    function myTimer() {

        timer_count.textContent = time;
        time = time - 1;

        const allOptions = option_list.children.length;
        let correctAnswer = questions[ques_count].answer;

        if (time < 0) {
            clearInterval(counter);
            timer_left_text.textContent = `${time_up_txt}`;

            timer_count.textContent = "";
            timer_count.insertAdjacentHTML('beforeend', time_up_img);
            //disable click events on the options

            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correctAnswer) { //if there is an option which is matched to an array answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", check_tag); //adding tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }

            for (let i = 0; i < allOptions; i++) {

                option_list.children[i].classList.add("disabled");
            }
        }



    }

}
//upon clicking the previous button, show the respective question in the quizbox
// prev_btn.addEventListener('click', prev_btnClick)

//upon clicking the next button, show the respective question in the quizbox
next_btn.addEventListener('click', next_btnClick)