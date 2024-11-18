
// custom logger
const getTimeStamp = (): string => {
    return new Date().toISOString();
}

const info = (namespace: string, msg: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${msg}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO] [${namespace}] ${msg}`);
    }
}

const error = (namespace: string, msg: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${msg}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [ERROR] [${namespace}] ${msg}`);
    }
}

const warn = (namespace: string, msg: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${msg}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [WARN] [${namespace}] ${msg}`);
    }
}
const debug = (namespace: string, msg: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${msg}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${msg}`);
    }
}

export default {
    info, warn, error, debug
}