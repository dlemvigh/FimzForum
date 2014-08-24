app.controller("topicController", [
    "$scope", "$routeParams", "threadService", function ($scope, $routeParams, threadService) {
        $scope.topicId = $routeParams.topic;

        $scope.threads = [];
        threadService.getThreads($scope.topicId).success(function (data) {
            $scope.threads = data;
        });

        $scope.title = "";
        $scope.lock = false;

        $scope.clearTitle = function () {
            $scope.title = "";
        };

        $scope.addThread = function () {
            $scope.lock = true;

            var thread = {
                Title: $scope.title,
                TopicId: $scope.topicId
            };

            threadService.addThread(thread).success(function (response) {
                $scope.threads.push(response);
                $scope.clearTitle();
            }).finally(function () {
                $scope.lock = false;
            });
        };
    }]);
//# sourceMappingURL=topicController.js.map
