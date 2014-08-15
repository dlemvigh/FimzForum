angular.module("TopicCtrl", []).controller("TopicController", function ($scope, $routeParams) {
    $scope.topic = "tt";
    $scope.params = $routeParams, $scope.threads = [
        {
            id: 1,
            topicId: 1,
            name: "Casablanca"
        },
        {
            id: 2,
            topicId: 1,
            name: "Lord of the Rings"
        },
        {
            id: 3,
            topicId: 2,
            name: "Chuck Norris facts"
        }
    ];
});
//# sourceMappingURL=topic.js.map
