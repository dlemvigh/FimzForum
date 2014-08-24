app.controller("ForumController", function ($scope, $http) {
    $scope.topics = [];
    $scope.getTopics = function () {
        $http.get("/api/Topic", { cache: true }).success(function (data) {
            $scope.topics = data;
        });
    };
    $scope.getTopics();
});
//# sourceMappingURL=forum.js.map
