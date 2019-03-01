AngularJS1 "strictDi" Demo
==========================

```
npm install
yarn demo
```

会报错：

```
Error: [$injector:strictdi] helloController is not using explicit annotation and cannot be invoked in strict mode
```

原因是由于设置了`strictDi: true`，所以下面这种定义不允许：

```
.controller('helloController', function ($scope) {
  $scope.yourName = 'angularjs'
});
```

必须写成：

```
.controller('helloController', ['$scope', function ($scope) {
  $scope.yourName = 'angularjs'
}]);
```

