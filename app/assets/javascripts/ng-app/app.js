angular
  .module('AngularRails', [
    'ngRoute',
    'templates',
    'ngCookies',
    'ng-token-auth'
  ]).config(function ($routeProvider, $locationProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
      })
      .when('/profile/:id', {
        templateUrl: 'profile.html',
        controller: 'ProfileCtrl'
      });
    $locationProvider.html5Mode(true);
    $authProvider.configure({
      apiUrl: ''
    })
  });
