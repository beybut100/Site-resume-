
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