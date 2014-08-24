var fimz;
(function (fimz) {
    var TopicService = (function () {
        function TopicService($http) {
            var _this = this;
            this.$http = $http;
            this.getTopics = function () {
                return _this.$http.get('api/Topic', { cache: true });
            };
            this.getTopic = function (id) {
                return _this.$http.get('api/Topic/' + id);
            };
        }
        return TopicService;
    })();
    fimz.TopicService = TopicService;
})(fimz || (fimz = {}));

app.service("topicService", ["$http", fimz.TopicService]);
//# sourceMappingURL=topicService.js.map
