"use strict";
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");
    console.log("I AM TEST ");v

const Hazel = require("hazel-wiki").app;
const config = require("./config.default.js");
const StorageProvider = require("hazel-wiki").storageProvider;

let app = new Hazel(config, StorageProvider);
let server = app.server;

server.listen(5000, () => {
    console.log("✔ Hazel server listening at 3000 ");
});
