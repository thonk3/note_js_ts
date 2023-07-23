"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var express_1 = __importDefault(require("express"));
// import bodyparser from "body-parser"
var logging_1 = __importDefault(require("./config/logging"));
var config_1 = __importDefault(require("./config/config"));
var sample_1 = __importDefault(require("./routes/sample"));
var NAMESPACE = "Server";
var router = express_1.default();
// logging the request
router.use(function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Method - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "]");
    res.on('finish', function () {
        logging_1.default.info(NAMESPACE, "Method - [" + req.method + "], URL - [" + req.url + "], IP - [" + req.socket.remoteAddress + "], STATUS - [" + req.statusCode + "]");
    });
    next();
});
// parse body of request
router.use(express_1.default.urlencoded({ extended: false }));
router.use(express_1.default.json());
// already pre-included in expres
// api rules
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*"); // rm in prod, allow all sources
    res.header('Access-Control-Allow-Origin', "Origin, X-Requested-With, Content-type, Accept, Authorization");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
        return res.status(200).json({});
    }
    next();
});
// routes
router.use('/api/sample', sample_1.default);
// error handling
router.use(function (req, res, next) {
    var error = new Error('Not Found');
    res.status(400).json({
        message: error.message
    });
});
// creating the server
var httpServer = http_1.default.createServer(router);
httpServer.listen(config_1.default.server.port, function () {
    return logging_1.default.info(NAMESPACE, "Server running on " + config_1.default.server.hostname + ":" + config_1.default.server.port);
});
