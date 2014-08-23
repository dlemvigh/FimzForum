app.service("TopicService", function ($http) {
    this.getTopics = $http.get('api/Topic');

    this.getTopic = (id) => $http.get('api/Topic/' + id);
});