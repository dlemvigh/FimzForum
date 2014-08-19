angular.module("TopicCtrl", []).controller("TopicController", function ($scope, $routeParams) {
    $scope.topicId = $routeParams.topic;

    $scope.threads = [
        {
            id: 1,
            topicId: 1,
            title: "Casablanca"
        },
        {
            id: 2,
            topicId: 1,
            title: "Lord of the Rings"
        },
        {
            id: 3,
            topicId: 2,
            title: "Chuck Norris facts"
        }
    ];

    $scope.filtered = function () {
        return $scope.threads.filter(function (item) {
            return item.topicId == $scope.topicId;
        });
    };
});
//# sourceMappingURL=topic.js.map
