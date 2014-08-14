(function () {
    var app = angular.module("app", ["TsCtrl"]);

    app.controller("TestController", function ($scope) {
        $scope.message = "hello, world";
    });
})();