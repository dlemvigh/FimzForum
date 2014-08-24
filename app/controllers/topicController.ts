app.controller("topicController", ["$scope", "$routeParams", "threadService", function ($scope, $routeParams, threadService : fimz.ThreadService) {

    $scope.topicId = $routeParams.topic;

    $scope.threads = [];
    threadService.getThreads($scope.topicId)
        .success((data) => {
            $scope.threads = data;
        });

    $scope.title = "";
    $scope.lock = false;

    $scope.clearTitle = function () {
        $scope.title = "";
    }

    $scope.addThread = function () {
        $scope.lock = true;

        var thread: fimz.IThread = {
            Title: $scope.title,
            TopicId: $scope.topicId,
        };

        threadService.addThread(thread)
            .success((response: fimz.IThread) => {
                $scope.threads.push(response);
                $scope.clearTitle();
            })
            .finally(() => {
                $scope.lock = false;
            });
    };
}]);