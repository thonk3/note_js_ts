import mongoose from "npm:mongoose@^6.7";

import Dino from './model/Dino.ts';

// connecting to the mongoose DB
await mongoose.connect("API_STRING");
// check connection status
console.log(mongoose.connection.readyState);
/*
  deno run --allow-read --allow-sys --allow-env --allow-net main.ts
  1
*/

// --------------------------------------------------------------------------------
const deno = new Dino({
  name: "Deno",
  description: "fastest boi ever existed"
});

// insert new dino
// await deno.save();

const denoFromMongo = await Dino.findOne({ name: "Deno" });
console.log(
  `${denoFromMongo.name} : ${denoFromMongo.description}`
);

await denoFromMongo.updateDesc("found you");
const newDenoFromMongo = await Dino.findOne({ name: "Deno" });
console.log(
  `${newDenoFromMongo.name} : ${denoFromMongo.description}`
);



// ok its just simple mongoose.connect then interfacing with mongoose via the schema??
