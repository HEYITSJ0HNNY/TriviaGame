$(document).ready(function(){
  //question and answer array
var quizQuestions = [
  {
    id: 1,
  question: "What game studio created Overwatch?",
  answers: ["Blizzard Entertainment", "Riot Games", "Valve", "Psyonix"],
  correctAnswer: "Blizzard Entertainment"
},
  {
    id: 2,
  question: "What is the name of the Princess who Mario has to keep rescuing from Bowser",
  answers: ["Elsa", "Daisy", "Peach", "Daphne"],
  correctAnswer: "Peach"
  },
  {
    id: 3,
  question: "What is the main character in the Halo series?",
  answers: ["Master Chief", "The Arbiter", "Solider 76", "Marcus  Fenix"],
  correctAnswer: "Master Chief"
}

];

var index = 0;
var quizTimer;
var totalCorrect = 0;
var totalWrong = 0;

function startGame(){
      $(".list-group").empty();

    getQuestion();
}

function getQuestion(){
  var question = quizQuestions[index].question;
  var choices = quizQuestions[index].answers;
    $('.list-group').empty();
    $("#displayQuestion").html('<div id="choices" class="list-group-item-disabled"><h1>' + question +'</h1></div>');
    for (var i = 0; i < quizQuestions[index].answers.length; i++) {
    $(".list-group").append('<a href="#" class="list-group-item">'+ quizQuestions[index].answers[i] + '</a>');
  }
  highlight();

}

  function highlight(){
  $(".list-group-item").click(function(){
    var txt = $(this).text();
    $(".list-group").removeClass('active');
    $(this).addClass('active');
    answerCheck(txt);

});
}


function answerCheck(choice){
  if(choice !== quizQuestions[index].answer){
    index++;
    totalCorrect++;
  } else {
    index++;
    totalWrong++;
  }
  console.log('right: ' + totalCorrect, 'wrong: ' + totalWrong);
  console.log(index);

  getQuestion();

}
function gameOver(){
  if(data[index] === undefined && totalCorrect > totalWrong){
    alert("you win")
  }
  }

$("#beginButton").click(function(){
  $("#start").empty();
  startGame();
})

});
