import http from "http";
import express, { Request, Response, NextFunction } from "express"
// import bodyparser from "body-parser"
import logging from "./config/logging"
import config from './config/config'

import sampleRoute from './routes/sample'

const NAMESPACE = "Server"
const router = express();

// logging the request
router.use((req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logging.info(NAMESPACE, `Method - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${req.statusCode}]`);
    })

    next();
})

// parse body of request
router.use(express.urlencoded({ extended: false }));
router.use(express.json());
// already pre-included in expres

// api rules
router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', "*"); // rm in prod, allow all sources
    res.header('Access-Control-Allow-Origin', "Origin, X-Requested-With, Content-type, Accept, Authorization");

    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET PATCH DELETE POST PUT");
        return res.status(200).json({});
    }

    next();
})

// routes
router.use('/api/sample', sampleRoute);

// error handling
router.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');

    res.status(400).json({
        message: error.message
    });
})

// creating the server
const httpServer = http.createServer(router);
httpServer.listen(config.server.port, () =>
    logging.info(NAMESPACE, `Server running on ${config.server.hostname}:${config.server.port}`));



