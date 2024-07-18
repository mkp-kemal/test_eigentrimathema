import { getAllBooks, getBooksWithStockGreaterThanOne, createBook } from '../../application/services/book.service.js';

export const getAllBooksHandler = async (req, res) => {
    try {
        const result = await getBooksWithStockGreaterThanOne();
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const createBookHandler = async (req, res) => {
    try {
        const book = await createBook(req.body);
        res.status(201).json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
