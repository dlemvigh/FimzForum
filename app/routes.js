angular.module("Routes", ["ngRoute"]).config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/forum.html',
        controller: 'forumController'
    }).when('/Demo', {
        templateUrl: 'app/views/demo.html'
    }).when('/:topic', {
        templateUrl: 'app/views/topic.html',
        controller: 'topicController'
    }).when('/:topic/:thread', {
        templateUrl: 'app/views/thread.html',
        controller: 'threadController'
    }).otherwise({
        templateUrl: 'app/views/404.html'
    });
});
//# sourceMappingURL=routes.js.map
