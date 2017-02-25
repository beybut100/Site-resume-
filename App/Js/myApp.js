
var myApp = angular.module('myApp', ['chart.js' , 'ngRoute' , 'ngAnimate' ]);

myApp.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "about-me.html",
        activeTab: 'about-me'
  })
  .when("/about-me", {
    templateUrl : "about-me.html",
        activeTab: 'about-me'
  })
  .when("/quiz", {
    templateUrl : "quiz.html",
        activeTab: 'quiz'
  })
  .when("/html-kontacts", {
    templateUrl : "html-kontacts.html",
        activeTab: 'html-kontacts'
  });


});

myApp.animation("qouteslideanimation", function () {
  return {
    beforeAddClass : function (element, classname, done) {
      if (classname == nghide){
        var finishPoint = element.parent().width();
        TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
      }
      else { done() }
    },

    removeClass : function (element, classname, done) {
      if (classname == "ng-hide") {
        element.removeClass('ng-hide');
        var startPoint = -element.parent().width();
        TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
      }
    }
  }
});



