'use strict';

/**
 * @ngdoc overview
 * @name calendarioApp
 * @description
 * # calendarioApp
 *
 * Main module of the application.
 */
angular
  .module('calendarioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
