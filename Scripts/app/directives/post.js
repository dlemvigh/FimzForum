angular.module("PostDir", []).directive("postList", function () {
    return {
        restrict: 'E',
        templateUrl: 'partials/thread-post-list.html',
        controller: 'ThreadController'
    };
});
//# sourceMappingURL=post.js.map
