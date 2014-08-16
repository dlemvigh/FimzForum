(function () {
    var app = angular.module("app", ["Routes", "ForumCtrl", "TopicCtrl", "ThreadCtrl", "TopicDir", "ThreadDir", "PostDir"]);

    app.controller("TestController", function ($scope) {
        $scope.message = "hello, world";
    });
})();