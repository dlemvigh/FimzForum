app.controller("threadController", ["$scope", "$routeParams", "postService", function ($scope, $routeParams, postService : fimz.PostService) {

    $scope.topicId = $routeParams.topic
    $scope.threadId = $routeParams.thread;

    $scope.posts = [];
    postService.getPosts($scope.topicId)
        .success(function (data: fimz.IPost[]) {
            $scope.posts = data;
        });
}]);