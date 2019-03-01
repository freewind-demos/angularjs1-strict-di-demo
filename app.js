angular.module('myApp', [])
  .controller('helloController', function ($scope) {
    $scope.yourName = 'angularjs'
  });

angular.bootstrap(document, ['myApp'], {
  strictDi: true
})
