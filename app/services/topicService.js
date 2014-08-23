app.service("TopicService", function ($http) {
    this.getTopics = $http.get('api/Topic');

    this.getTopic = function (id) {
        return $http.get('api/Topic/' + id);
    };
});
//# sourceMappingURL=topicService.js.map
