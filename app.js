    console.log("I AM TEST 1");

var Hazel = require("hazel-wiki").app;
    console.log("I AM TEST 2");
var config = require("./config.default.js");
    console.log("I AM TEST 3");
var StorageProvider = require("hazel-wiki").storageProvider;
    console.log("I AM TEST 4");

var app = new Hazel(config, StorageProvider);
    console.log("I AM TEST 5");
var server = app.server;
    console.log("I AM TEST 6");

var PORT = 5000;
server.listen(PORT, function() {
    console.log("I AM TEST 7");
    console.log("✔ Hazel server listening at 3000 ");
    console.log(`Listening on ${ PORT }`);
});
