module fimz {
    export class PostService {
        constructor(private $http: ng.IHttpService) {
        }

        public getPost = (id: number) => {
            return this.$http.get<fimz.IPost>("/api/Post/" + id, { cache: true });
        }

        public getPosts = (threadId: number) => {
            return this.$http.get<fimz.IPost[]>("/api/Post?threadId=" + threadId, { cache: true });
        }

        public addPost = (post: fimz.IPost) => {
            return this.$http.post<fimz.IPost>("/api/Post", post);
        }
    }
}

app.service("postService", ["$http", fimz.PostService]);