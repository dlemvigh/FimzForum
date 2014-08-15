angular.module("Routes", ["ngRoute"]).config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/forum.html',
        controller: 'ForumController'
    }).when('/Topic/:topic?', {
        templateUrl: 'views/topic.html',
        controller: 'TopicController'
    }).when('/Thread/:thread?', {
        templateUrl: 'views/thread.html',
        controller: 'ThreadController'
    }).when('/Demo', {
        templateUrl: 'views/demo.html'
    }).otherwise({
        templateUrl: 'views/404.html'
    });
});
//# sourceMappingURL=routes.js.map
