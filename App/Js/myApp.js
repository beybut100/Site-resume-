
var myApp = angular.module('myApp', ['chart.js' , 'ngRoute']);

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