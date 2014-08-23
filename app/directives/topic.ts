app.directive("topicList", function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/forum-topic-list.html',
        controller: 'ForumController',
    };
});