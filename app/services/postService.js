var fimz;
(function (fimz) {
    var PostService = (function () {
        function PostService($http) {
            var _this = this;
            this.$http = $http;
            this.getPost = function (id) {
                return _this.$http.get("/api/Post/" + id, { cache: true });
            };
            this.getPosts = function (threadId) {
                return _this.$http.get("/api/Post?threadId=" + threadId, { cache: true });
            };
            this.addPost = function (post) {
                return _this.$http.post("/api/Post", post);
            };
        }
        return PostService;
    })();
    fimz.PostService = PostService;
})(fimz || (fimz = {}));

app.service("postService", ["$http", fimz.PostService]);
//# sourceMappingURL=postService.js.map
