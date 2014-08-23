declare module fimz {
    interface IUser {
        Id?: number;
        Name: string;
    }

    interface ITopic {
        Id?: number;
        Name: string;
        Description: string;
    }

    interface IThread {
        Id?: number;
        Title: string;
        TopicId: number;
        Topic?: ITopic;
    }

    interface IPost {
        Id?: number;
        Body: string;
        userId: number;
        Poster?: IUser;
        ThreadId: number;
        Thread?: IThread;
        Created?: Date;
    }
}