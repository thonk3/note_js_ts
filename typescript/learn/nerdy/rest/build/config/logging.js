"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// custom logger
var getTimeStamp = function () {
    return new Date().toISOString();
};
var info = function (namespace, msg, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + msg, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [INFO] [" + namespace + "] " + msg);
    }
};
var error = function (namespace, msg, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + msg, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [ERROR] [" + namespace + "] " + msg);
    }
};
var warn = function (namespace, msg, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + msg, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [WARN] [" + namespace + "] " + msg);
    }
};
var debug = function (namespace, msg, object) {
    if (object) {
        console.log("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + msg, object);
    }
    else {
        console.log("[" + getTimeStamp() + "] [DEBUG] [" + namespace + "] " + msg);
    }
};
exports.default = {
    info: info, warn: warn, error: error, debug: debug
};
