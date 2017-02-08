
var myApp = angular.module('myApp', ['chart.js' , 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "index.html"
  })
  .when("/about-me", {
    templateUrl : "about-me.html"
  })
  .when("/quiz", {
    templateUrl : "quiz.html"
  })
  .when("/kontcts", {
    templateUrl : "html-kontacts.html"
  });
});