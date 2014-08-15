(function () {
    var app = angular.module("app", ["Routes", "TsCtrl", "ForumCtrl", "TopicCtrl", "ThreadCtrl"]);

    app.controller("TestController", function ($scope) {
        $scope.message = "hello, world";
    });
})();