angular.module("PostDir", []).directive("postList", function () {
    return {
        restrict: 'E',
        templateUrl: 'app/directives/thread-post-list.html',
        controller: 'ThreadController',
    };
});