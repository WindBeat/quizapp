var score = 0;

var i = 0;



var questions = [
        {question: "Which country has held the most Winter Olympics?", choices: ["Canada", "Russia", "United States", "Brazil"], correct:2},
        {question: "When did snowboarding start at the Olympics?", choices: [1998, 2005, 1986, 1943], correct:5},
        {question: "Which American has the most gold medals in a single Winter Olympics event?",  choices: ["Shaun White", "Usain Bolt", "Eric Heiden", "Jason Brown"],   correct:2},
        {question: "What is the oldest event in the Winter Olympics ?",   choices: ["Bobsled", "Snowboarding", "Figure Skating", "Hockey"], correct:2},
        {question: "When were the first Winter Olympic games held?",    choices: [1924, 1989, 2001, 1890], correct:0},
        {question: "What date will the 2014 Winter Olympics begin?",   choices: ["February 1st", "February 7th", "March 5th", "April 23rd"], correct:1},
        {question: "What is the world record speed for downhill skiing?",   choices: ["200mph", "156mph", "40mph", "90mph"], correct:1},
        {question: "Which country has won the most gold medals at the Winter Olympics?",    choices: ["United States", "China", "Norway", "Russia"], correct:2},
        {question: "Where will the 2018 Winter Olympics be held?",choices: ["Iceland", "Canada", "Brazil", "South Korea"], correct:3},
        {question: "What event has been for men since the start of the Winter Games and will allow women to go for the gold for the first time in Sochi?",  choices: ["Snowboarding", "Ski jump", "Hockey", "Skating"], correct:1}
        ];
        
        
        

        
        $(document).on("click", ".submit", function() {
                 
                 var answer = $('input[type="radio"]:checked').val();
                 
                 i = (i+1)%11;
                 
                        if (answer === undefined) {
                                alert("Select an option.");
                                
                        }
                 //This does not work. Want to pull answer from array for each question.//
                        else if (parseInt(answer) === questions[i-1].correct){
                                alert("That is Correct.");
                                
                        }
                        else {
                                alert("Wrong Answer.");
                                
                        }
         
        });
        
        var $accordion = $("#accordion").accordion();
        function openNextAccordionPanel() {
                var current = $accordion.accordion("option","active"),
                maximum = $accordion.find("h3").length,
                next = current+1 === maximum ? 0 : current+1;
    // $accordion.accordion("activate",next); // pre jQuery UI 1.10
                $accordion.accordion("option","active",next);
}

