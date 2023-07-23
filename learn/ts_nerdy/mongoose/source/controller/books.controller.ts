import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import logging from '../config/logging';
import Book from '../models/book';

const NAMESPACE = 'Sample Controller';

const createBook = (req: Request, res: Response, next: NextFunction) => {
    let { author, title } = req.body;

    const book = new Book({
        _id: new mongoose.Types.ObjectId(),
        author, title
    });

    return book.save()
        .then(result => res.status(201).json({ book: result }))
        .catch(error => res.status(500).json({
            message: error.message,
            error
        }))
}

const getAllBooks = (req: Request, res: Response, next: NextFunction) => {
    Book.find().exec()
        .then(result => {
            return res.status(200).json({
                books: result,
                count: result.length
            })
        })
        .catch(error => {
            return res.status(500).json({ message: error.message });
        });
}

export default {
    createBook,
    getAllBooks
}