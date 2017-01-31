console.log('hi')

const app = angular.module('cuteApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
        .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.html',
      })

})