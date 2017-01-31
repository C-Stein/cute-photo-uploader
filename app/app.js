console.log('hi')

const app = angular.module('cuteApp', ['ngRoute'])

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB_JTvdqgYthEXgBgnmAudkIoxoBNMvSTQ",
    authDomain: "cute-animal-uploads.firebaseapp.com",
    databaseURL: "https://cute-animal-uploads.firebaseio.com",
    storageBucket: "cute-animal-uploads.appspot.com",
    messagingSenderId: "971493546345"
  };
  firebase.initializeApp(config);

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
        .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.html',
      })

})