import { json } from "body-parser";
import env from "dotenv";

env.config()

/* mongo config */
const MONGO_OPT = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    poolSize: 50,
    autoIndex: false,
    retryWrites: false
}

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'superuser';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'password';
const MONGO_HOST = process.env.MONGO_URL || "yep";

const MONGO = {
    host: MONGO_HOST,
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    options: MONGO_OPT,
    url :`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}`
}

/* server config */
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
}

const config = {
    server: SERVER,
    mongo: MONGO
}

export default config;