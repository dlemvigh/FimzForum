angular.module("ThreadDir", []).directive("threadList", function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/topic-thread-list.html',
        controller: 'TopicController',
    };
});