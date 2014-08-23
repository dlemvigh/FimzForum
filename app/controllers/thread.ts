app.controller("ThreadController", function ($scope, $routeParams, $http : ng.IHttpService) {

    $scope.topicId = $routeParams.topic
    $scope.threadId = $routeParams.thread;

    $scope.posts = [];
    $scope.getPosts = function () {
        $http.get("/api/Post?ThreadId=" + $scope.threadId, { cache: true })
            .success(function (data: fimz.IPost[]) {
                $scope.posts = data;
            });
    };
    $scope.getPosts();
});