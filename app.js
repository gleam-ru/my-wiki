"use strict";

const Hazel = require("hazel-wiki").app;
const config = require("./config.default.js");
const StorageProvider = require("hazel-wiki").storageProvider;

let app = new Hazel(config, StorageProvider);
let server = app.server;

server.listen(3000, () => {
    console.log("✔ Hazel server listening at 3000 ");
});
