
myApp.controller("phonesController", function ($scope) {
    $scope.select = function(event) {
		$(".active.active-color").removeClass("active active-color").addClass("standart-link");
		$(event.target).parent().removeClass("standart-link").addClass("active active-color");
	}
});

myApp.controller("NumberPhoneController", function ($scope) {
    $scope.show = function(event) {
		$(".contact-form ").removeClass("hide-form");
	}
	 $scope.hide = function(event) {


		$(".contact-form ").removeClass("show-form").addClass("hide-form")
	}


});


myApp.controller("OnlyKirilicSymbol", function ($scope) {
 $scope.checkComment =  function(event) {
  var pattern = new RegExp("[а-яА-ЯЇїІіЄє0-9.,!?()-]");

  if (event.key === " " || event.key === "Backspace") {
   return;
  }

  var result = pattern.test(event.key);
  console.log('pattern test result', event);
  if (!result) {
   event.preventDefault();
  }
 }
});

myApp.controller("LogoController", function ($scope) {

 $scope.changecolor = function (event) {
  var that = this;
  var randomcolor = $scope.colors[this.randomindex()];
  console.log(event);
  var target = $(event.target);
  target.css("background-color", randomcolor.color);
  setTimeout(function(){that.changecolor(event);}, randomcolor.timeout);
 }

 $scope.colors = [
  {id: 1, color: "red", timeout: 1500 },
  {id: 2, color: "green", timeout: 300 },
  {id: 3, color: "blue", timeout: 800 },
  {id: 4, color: "pink", timeout: 450 }
 ];

 $scope.randomindex = function() {
  var min = 0;
  var max = $scope.colors.length - 1;
  var randomindexvalue = min + Math.floor(Math.random() * (max + 1 - min));
  return randomindexvalue;
 }
});

myApp.controller("TestController", function ($scope) {
 $scope.labels = ['Пройдено', 'Залишилось'];
 $scope.completedCount = 0;
 $scope.maxCount = 10;
 $scope.data = [0, 10];
 $scope.chart = null;
 $scope.init = function() {
  var data = {
    labels: $scope.labels,
    datasets: [{
     data: $scope.data,
     backgroundColor: [ "#4169E1","#FFFF00" ]
    }]
   };
  $scope.chart = new Chart($("#pie"),{type: 'pie', data: data});
 };
 $scope.complete = function() {
  
  if ($scope.completedCount >= $scope.maxCount) {
   return
  }
  $scope.completedCount++;
  $scope.data = [$scope.completedCount, $scope.maxCount - $scope.completedCount];
  $scope.chart.data.datasets[0].data = $scope.data;
  $scope.chart.update();
 }
});

myApp.controller("QuizController", function ($scope) {
  $scope.questions = [
  {
    id: 1,
    question_text : "Яка улюлена страва Юрія Зелінського?",
    answers: [
    {id: 1, answer_text: "Голубці", iscorrect: true},
    {id: 2, answer_text: "Яблучний пиріг", iscorrect: false},
    {id: 3, answer_text: "Пельмені", iscorrect: false},
    {id: 4, answer_text: "Зрази з грибами", iscorrect: false}
    ]    

  }, {
    id: 2,
    question_text : "Улюблений фільм Юрія Зелінського ?",
    answers: [
    {id: 1, answer_text: "Форест Гамп", iscorrect: true},
    {id: 2, answer_text: "Американський пиріг", iscorrect: false},
    {id: 3, answer_text: "Брат 2", iscorrect: false},
    {id: 4, answer_text: "Втеча із Шоушенка", iscorrect: false}
    ] 
  }    

  ];
  $scope.currentQuestion = $scope.questions[0];
  $scope.selectrightanswer = function (id) {
  
   $(".answerright").removeClass("answerright");
    $("#answer_"+id).addClass("answerright")
 $scope.answerid = id;
}
  
 $scope.getCorrectAnswer = function () {
         for (i=0; i< $scope.currentQuestion.answers.length;i++ ) {
            if ($scope.currentQuestion.answers[i].iscorrect) {
    console.log($scope.currentQuestion.answers[i].iscorrect);
              return $scope.currentQuestion.answers[i];
            } 
    }
        }
 $scope.checkAnswer = function (item) {
       
          if ($scope.answerid==item.id) {
            return true;

                }

                return false;
      }


 $scope.pushanswer = function() {
    var correctAnswer = this.getCorrectAnswer();
    if (this.checkAnswer(correctAnswer)) {

      $scope.startAnimationOnCorrectAnswer()
    }

     else { alert("8")} 



  }

$scope.startAnimationOnCorrectAnswer = function (id) {
  
var timerId = setInterval(function(id) {
  $("#answer_"+id).removeClass("answerright")
  $("#answer_"+id).addClass("dynamicAnsweright");

  
}, 50, id);

}
  


});  




