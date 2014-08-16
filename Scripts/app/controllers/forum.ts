angular.module("ForumCtrl", []).controller("ForumController", function ($scope) {
    $scope.f = "ff";

    $scope.topics = [
        { id: 1, name: "movies" },
        { id: 2, name: "fun" },
    ];

    
});