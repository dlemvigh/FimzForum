angular.module("Routes", ["ngRoute"]).config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/forum.html',
        controller: 'ForumController'
    }).when('/Demo', {
        templateUrl: 'app/views/demo.html'
    }).when('/:topic', {
        templateUrl: 'app/views/topic.html',
        controller: 'TopicController'
    }).when('/:topic/:thread', {
        templateUrl: 'app/views/thread.html',
        controller: 'ThreadController'
    }).otherwise({
        templateUrl: 'aap/views/404.html'
    });
});
//# sourceMappingURL=routes.js.map
