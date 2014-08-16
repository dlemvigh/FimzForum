angular.module("Routes", ["ngRoute"]).config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/forum.html',
            controller: 'ForumController',
        })
        .when('/Demo', {
            templateUrl: 'views/demo.html',
        })
        .when('/:topic', {
            templateUrl: 'views/topic.html',
            controller: 'TopicController',
        })
        .when('/:topic/:thread', {
            templateUrl: 'views/thread.html',
            controller: 'ThreadController',
        })
        .otherwise({
            templateUrl: 'views/404.html',
        });
});
