var score = 0;
var i = 0;

var questions = [
        {question: "Which country has held the most Winter Olympics?", choices: ["Canada", "Russia", "United States", "Brazil"], answer:2},
        {question: "When did snowboarding start at the Olympics?", choices: [1998, 2005, 1986, 1943], answer:0},
        {question: "Which American has the most gold medals in a single Winter Olympics event?",  choices: ["Shaun White", "Usain Bolt", "Eric Heiden", "Jason Brown"],   answer:2},
        {question: "What is the oldest event in the Winter Olympics ?",   choices: ["Bobsled", "Snowboarding", "Figure Skating", "Hockey"], answer:1},
        {question: "When were the first Winter Olympic games held?",    choices: [1924, 1989, 2001, 1890], answer:0},
        {question: "What date will the 2014 Winter Olympics begin?",   choices: ["February 1st", "February 7th", "March 5th", "April 23rd"], answer:1},
        {question: "What is the world record speed for downhill skiing?",   choices: ["200mph", "156mph", "40mph", "90mph"], answer:1},
        {question: "Which country has won the most gold medals at the Winter Olympics?",    choices: ["United States", "China", "Norway", "Russia"], answer:2},
        {question: "Where will the 2018 Winter Olympics be held?",choices: ["Iceland", "Canada", "Brazil", "South Korea"], answer:3},
        {question: "What event has been for men since the start of the Winter Games and will allow women to go for the gold for the first time in Sochi?",  choices: ["Snowboarding", "Ski jump", "Hockey", "Skating"], answer:1}
        ];
        
$(document).ready(function() {
        
        $(".submit").click(function() {
                 var answer = $('input[type="radio"]:checked').val();
                 
                 if (answer === undefined) {
                         alert("Select an option.");
                 }
                 else if (parseInt(answer) === questions[i].answer){
                         alert("That is Correct.");
                 }
                 else {
                         alert("Wrong Answer.");
                 }
        )}
});        
