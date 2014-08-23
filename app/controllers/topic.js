app.controller("TopicController", function ($scope, $routeParams, $http) {
    $scope.topicId = $routeParams.topic;

    $scope.threads = [];
    $scope.getThreads = function () {
        $http.get("/api/Thread?TopicId=" + $scope.topicId, { cache: true }).success(function (data) {
            $scope.threads = data;
        });
    };
    $scope.getThreads();

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
        debugger;

        $http.post("/api/Thread", thread).success(function (response) {
            debugger;
            $scope.threads.push(response);
            $scope.clearTitle();
        }).finally(function () {
            $scope.lock = false;
        });
    };
});
//# sourceMappingURL=topic.js.map
