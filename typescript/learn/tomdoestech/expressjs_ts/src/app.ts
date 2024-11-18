import express, { NextFunction, Request, Response } from 'express';

const app = express();
// set expres server to pass json body
app.use(express.json());
// if you are passing url encoded body
app.use(express.urlencoded({ extended: true }));

// get example sending a json object
app.get("/", (req: Request, res: Response) => {
    return res.json({
        name: "egg",
        valid: true
    });
})

// get example sending redirect requests
app.get("redirect/", (req: Request, res: Response) => {
    return res.redirect("google.com")
})

// example chaining requests to use the same endpoint
app.route("multi/")
.get((req: Request, res: Response) => {
    return res.send("GET request")
})
.post((req: Request, res: Response) => {
    return res.send("POST request")
})

/* 
    On Route Paths
    Route path can be a string
    can be a wildcard pattern
    can be a regex expression
*/

// on Route parameters - passing parameters into the url
app.get('api/books/:bookId/:authId', (req: Request, res:Response) => {
    return res.json({
        bookID: req.params.bookId,
        authorID: req.params.authId
    })
})

/* 
    regular express callback functions works the same as Middleware functions, 
    if adding NextFunction param
*/
function handleGetBook(req: Request, res: Response, next: NextFunction) {
    console.log(req.params);

    // go to next middleware function
    next();
}

/* 
    interesting use of generics, but I feel like this is how ts works
    needs to look more into this via TS
*/


// post request
app.post('api/data', (req: Request, res: Response) => {
    return res.sendStatus(200);
})

// final listener - app.all - listen to all http requests
app.all('api/all', (req: Request, res: Response) => {
    return res.sendStatus(200);
})

// express error handling
// some what primitive
app.get('error/', (req: Request, res: Response) => {
    throw new Error("Boom");
})

/* 
    express architecture
    controller - service model

    src/routes.ts
    src/controllers/controller for each resource types
    src/services/service for database calls
    src/service/models/model for type models

    or separate folder for each resources
*/

/* 
    primitive application security 

    a simple fix is to add npm package called helmet
*/
import helmet from "helmet"
app.use(helmet());

app.listen(3000, () => {
    console.log(`App listening at http://localhost:3000`);
})