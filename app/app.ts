﻿/// <reference path="../Scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../Scripts/typings/breeze/breeze.d.ts" />
/// <reference path="../Scripts/typings/underscore/underscore.d.ts" />
var app = angular.module("app", ["Routes", "TsCtrl", "ForumCtrl", "TopicCtrl", "ThreadCtrl", "TopicDir", "ThreadDir", "PostDir"]);

app.controller("TestController", function ($scope) {
    $scope.message = "hello, world";
});
