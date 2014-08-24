app.controller("threadController", [
    "$scope", "$routeParams", "postService", function ($scope, $routeParams, postService) {
        $scope.topicId = $routeParams.topic;
        $scope.threadId = $routeParams.thread;

        $scope.posts = [];
        postService.getPosts($scope.topicId).success(function (data) {
            $scope.posts = data;
        });
    }]);
//# sourceMappingURL=threadController.js.map
