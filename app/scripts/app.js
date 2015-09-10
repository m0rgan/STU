'use strict';

/**
 * @ngdoc overview
 * @name stuApp
 * @description
 * # stuApp
 *
 * Main module of the application.
 */
angular
  .module('stuApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'abt'
      })
      .when('/carreras', {
        templateUrl: 'views/carreras.html',
        controller: 'CarrerasCtrl',
        controllerAs: 'carrers'
      })
      .when('/materias', {
        templateUrl: 'views/materias.html',
        controller: 'MateriasCtrl',
        controllerAs: 'materis'
      })
      .when('/profesores', {
        templateUrl: 'views/profesores.html',
        controller: 'ProfesoresCtrl',
        controllerAs: 'profers'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
