'use strict';

/**
 * @ngdoc service
 * @name calendarioApp.calendarService
 * @description
 * # calendarService
 * Service in the calendarioApp.
 */
angular.module('calendarioApp')
  .service('calendarService', function ($http) {
    var turmas = [];

    this.getTurmas = function(){
      return $http.get('http://a.x25.com.br/api/turmas');
    };
  });
