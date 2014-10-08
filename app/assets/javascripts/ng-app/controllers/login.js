'use strict';
/**
 * @ngdoc function
 * @name talentApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Manages authentication to any active providers.
 */
angular.module('AngularRails')
  .controller('LoginCtrl', [ '$scope', '$location', '$auth',
   function ($scope, $location, $auth) {
    $scope.oauthlogin = function(provider) {
      login(provider, {
        rememberMe: true
      });
    };

    $scope.passwordLogin = function(email, pass) {
      login(email, pass);
      /*login('password', {
        email: email,
        password: pass,
        rememberMe: true
      });*/
    };

    $scope.createAccount = function(email, pass, confirm, name) {
      $scope.err = null;
      if( !pass ) {
        $scope.err = 'Please enter a password';
      }
      else if( pass !== confirm ) {
        $scope.err = 'Passwords do not match';
      }
      else if( !name ){
        $scope.err = 'Please enter a name'
      }
      else {
        $auth.submitRegistration({ email: email,password:  pass, password_confirmation: confirm})
          .then(function(data) {
            console.log(data);
            $location.path('/profile/' + data.id);
          }, function(err) {
            $scope.err = err;
          });
      }
    };

    function login(email, password) {
      console.log('email', email, 'password', password)
      $scope.err = null;
      $auth.submitLogin({email: email, password: password})
      .then(
        function(data) {
          console.log(data);
          $location.path('/profile/' + data.id);
        },
        function(err) {
          $scope.err = err;
        }
      );
    }

   }]);
