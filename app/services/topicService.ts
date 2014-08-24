module fimz {
    export class TopicService {
        constructor(private $http: ng.IHttpService) {
        }

        public getTopics = () => {
            return this.$http.get<fimz.ITopic[]>('api/Topic', { cache: true });
        }

        public getTopic = (id: number) => {
            return this.$http.get<fimz.ITopic>('api/Topic/' + id)
        }
    }
}

app.service("topicService", ["$http", fimz.TopicService]);
