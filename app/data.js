var manager = new breeze.EntityManager('odata');

var query = new breeze.EntityQuery().from('User');

manager.executeQuery(query).then(function (data) {
    console.log('data', data);
}).fail(function (e) {
    alert(e);
    console.log('error', e);
});
//# sourceMappingURL=data.js.map
