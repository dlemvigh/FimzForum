angular.module("ThreadCtrl", []).controller("ThreadController", function ($scope) {
    $scope.thread = "string";
    $scope.posts = [
        {
            id: 1,
            threadId: 1,
            body: "Bogard <3"
        },
        {
            id: 2,
            threadId: 1,
            body: "Wife beating bastard!"
        },
        {
            id: 3,
            threadId: 2,
            body: "Peter Jackson 4 ever"
        },
        {
            id: 4,
            threadId: 2,
            body: "Michael Bay sux ballz"
        }
    ];
});
//# sourceMappingURL=thread.js.map
