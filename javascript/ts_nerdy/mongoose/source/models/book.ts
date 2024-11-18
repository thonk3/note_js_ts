import mongoose, { Schema } from 'mongoose'
import IBook from '../interface/book'

const BookSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        extraInformation: { type: String }
    },
    {
        timestamps: true,
    }
);

BookSchema.post<IBook>('save', function(){
    // xtra information to be returned??? 
    // not put in the actual schema?
    this.extraInformation = 'extra info we want to put into entry after save';
})

export default mongoose.model<IBook>('Book', BookSchema);

/* 
    export model for rest api
    better for ide autocomplete whenever using mongoose model
*/