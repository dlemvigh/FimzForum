app.controller("forumController", ["$scope", "topicService", function ($scope, topicService : fimz.TopicService) {
    debugger;   
    $scope.topics = [];
    $scope.loading = true;
    topicService.getTopics()
            .success(function (data) {
                $scope.topics = data;
                $scope.loading = false;
            });    
    
}]);
