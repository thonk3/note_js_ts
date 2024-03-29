import { json } from "body-parser";
import env from "dotenv";

env.config()

const SERVER_PORT = process.env.SERVER_PORT || 1337;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
}

const config = {
    server: SERVER,
}

export default config;