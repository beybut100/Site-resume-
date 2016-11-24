
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
	$scope.change =  function(event, comment) { var pattern = new RegExp("\w+"); var result = pattern.test(comment); if (!result) {event.preventDefault(); }}

	}
});