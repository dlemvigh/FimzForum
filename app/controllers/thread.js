app.controller("ThreadController", function ($scope, $routeParams, $http) {
    $scope.topicId = $routeParams.topic;
    $scope.threadId = $routeParams.thread;

    $scope.posts = [];
    $scope.getPosts = function () {
        $http.get("/api/Post?ThreadId=" + $scope.threadId, { cache: true }).success(function (data) {
            $scope.posts = data;
        });
    };
    $scope.getPosts();
});
//# sourceMappingURL=thread.js.map
