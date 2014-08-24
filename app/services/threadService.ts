module fimz {
    export class ThreadService {
        constructor(private $http: ng.IHttpService) {
        }

        public getThread = (id: number) => {
            return this.$http.get<fimz.IThread>("api/Thread/" + id, { cache: true });
        }

        public getThreads = (topicId: number) => {
            return this.$http.get<fimz.IThread[]>("api/Thread?TopicId=" + topicId, { cache: true });
        }

        public addThread = (thread: fimz.IThread) => {
            return this.$http.post<fimz.IThread>("/api/Thread", thread);
        }
    }
}

app.service("threadService", ["$http", fimz.ThreadService]);