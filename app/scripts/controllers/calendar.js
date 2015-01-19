'use strict';

/**
 * @ngdoc function
 * @name calendarioApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the calendarioApp
 */
angular.module('calendarioApp')
  .controller('CalendarCtrl', function ($scope, calendarService) {
      calendarService.getTurmas()
      .success(function(turmas){
        $scope.turmas = turmas;
      })
      .error(function(data, status, headers, config){

      });
  });
