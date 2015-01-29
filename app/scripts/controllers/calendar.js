'use strict';

/**
 * @ngdoc function
 * @name calendarioApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the calendarioApp
 */
angular.module('calendarioApp')
  .controller('CalendarCtrl', function ($scope, calendarService, $log, $modal) {

      calendarService.getTurmas()
      .success(function(turmas){
        $scope.turmas = turmas;
      })
      .error(function(data, status, headers, config){

      });

      $scope.matricular = function(turma){
        var modalForm = $modal.open({
          templateUrl: 'modalForm.html',
          resolve: {
            tituloModal:  "Matricular"
          }
        });
      }

      $scope.consultarPreco = function(turma){
        $log.info("vou consultar o preco de um curso");
      }


  });
