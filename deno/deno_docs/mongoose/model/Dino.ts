import { model, Schema } from "npm:mongoose@^6.7";

// schema
const dinoSchema = new Schema({
  name: { type: String, unique: true },
  description: String, 
  createdAt: { type:Date, default: Date.now },
  updatedAt: { type:Date, default: Date.now }
});

// validations
dinoSchema.path("name")
  .required(true, "Dino name cannot be blank");
dinoSchema.path("description")
  .required(true, "Dino description cannot be blank");

// crud methods i guess??
dinoSchema.methods = {
  updateDesc: async function (desc: String) {
    this.description = desc;
    return await this.save();
  }
}

export default model("Dinosaur", dinoSchema);

