app.controller("ForumController", function ($scope, $http : ng.IHttpService) {

    $scope.topics = [];
    $scope.getTopics = function () {
        $http.get("/api/Topic", { cache: true })
            .success(function (data: fimz.ITopic[]) {
                $scope.topics = data;
            });
    }
    $scope.getTopics();
    
});