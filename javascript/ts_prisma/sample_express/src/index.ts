
/* basic sample */
import express from 'express';
import { get, post, put, remove }  from './controller';

const app = express();

// routes
app.get("/feed", get);
app.post("/post", post);
app.put("/publish/:id", put);
app.delete("/user/:id", remove);

// start server
app.listen(4000, () => {
    console.log("running")
})