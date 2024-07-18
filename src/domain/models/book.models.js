import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    stock: { type: Number, required: true },
},
    {
        timestamps: true,
        versionKey: false
    });

const Book = mongoose.model('Book', bookSchema);

export default Book;

