import { Document } from 'mongoose'

/* book interface */

// describe the model used in mongodb
// use in model

export default interface IBook extends Document {
    title: string,
    author: string,
    extraInformation: string,
}

// extraInformation is to modify document 