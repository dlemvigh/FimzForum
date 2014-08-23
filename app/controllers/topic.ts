app.controller("TopicController", function ($scope, $routeParams, $http : ng.IHttpService) {

    $scope.topicId = $routeParams.topic;

    $scope.threads = []
    $scope.getThreads = function () {
        $http.get("/api/Thread?TopicId=" + $scope.topicId, { cache: true })
            .success((data) => {
                $scope.threads = data;
            });
    };
    $scope.getThreads();

    $scope.title = "";
    $scope.lock = false;

    $scope.clearTitle = function () {
        $scope.title = "";
    }

    $scope.addThread = function () {
        $scope.lock = true;

        var thread: fimz.IThread = {
            Title : $scope.title,
            TopicId: $scope.topicId,
        };
        debugger;

        $http.post("/api/Thread", thread)
            .success((response: fimz.IThread) => {
                debugger;
                $scope.threads.push(response);
                $scope.clearTitle();
            })
            .finally(() => {
                $scope.lock = false;
            });
    }

});