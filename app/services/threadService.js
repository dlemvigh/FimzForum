var fimz;
(function (fimz) {
    var ThreadService = (function () {
        function ThreadService($http) {
            var _this = this;
            this.$http = $http;
            this.getThread = function (id) {
                return _this.$http.get("api/Thread/" + id, { cache: true });
            };
            this.getThreads = function (topicId) {
                return _this.$http.get("api/Thread?TopicId=" + topicId, { cache: true });
            };
            this.addThread = function (thread) {
                return _this.$http.post("/api/Thread", thread);
            };
        }
        return ThreadService;
    })();
    fimz.ThreadService = ThreadService;
})(fimz || (fimz = {}));

app.service("threadService", ["$http", fimz.ThreadService]);
//# sourceMappingURL=threadService.js.map
