/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Scripts/typings/breeze/breeze.d.ts" />
/// <reference path="../Scripts/typings/underscore/underscore.d.ts" />
/// <reference path="../Scripts/typings/fimz/fimz.d.ts" />
var app = angular.module("app", ["Routes"]);

app.controller("TestController", function ($scope, $http) {
    $scope.message = "hello, world";
});
//# sourceMappingURL=app.js.map
