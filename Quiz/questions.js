//storing all the quiz questions in this javascript file so they can be inserted using the script.js into the document

//questions are stored as an array of objects

let questions = [
    {
        number: 1,
        question: "What does HTML stand for ?",
        answer: "Hypertext Markup Language",
        options: [
            "Highlevel Text Markup Language",
            "Hypertext Markup Language",
            "Highertext Markup Language",
            "Hypertext Tool Markup Language",
        ]
    },

    {
        number: 2,
        question: "What is CSS is used for?",
        answer: "CSS is used to define styles for your web pages",
        options: [
            "CSS is used to structure a web page and its content",
            "CSS is used as an alternative to JavaScript",
            "CSS is used to put action into the page",
            "CSS is used to define styles for your web pages",
        ]
    },
    {
        number: 3,
        question: "What is JavaScript primarily used for?",
        answer: "to add dynamic behavior to the webpage and add special effects to the webpage",
        options: [
            "to add dynamic behavior to the webpage and add special effects to the webpage",
            "to add styles to the webpage",
            "to add structure a webpage and its content",
            "used as an alternative to SQL",
        ]
    },
    {
        number: 4,
        question: " What is === operator?",
        answer: "=== is called a strict equality operator, which returns true when the two operands have the same value without conversion.",
        options: [
            "=== is called loose equality operator",
            "== is called as === operator",
            "=== is called a strict equality operator, which returns true when the two operands have the same value without conversion.",
            "=== is same as loose equality operator",
        ]
    },
    {
        number: 5,
        question: "How can we include audio or video in a webpage?",
        answer: "HTML5 provides two tags: audio and video tags",
        options: [
            "HTML does not support audio or video tags",
            "HTML is working on bringing support for audio and video tags",
            "HTML5 does not support video and audio tags",
            "HTML5 provides two tags: audio and video tags",
        ]
    }
]