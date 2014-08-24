app.controller("forumController", [
    "$scope", "topicService", function ($scope, topicService) {
        debugger;
        $scope.topics = [];
        $scope.loading = true;
        topicService.getTopics().success(function (data) {
            $scope.topics = data;
            $scope.loading = false;
        });
    }]);
//# sourceMappingURL=forumController.js.map
