import Book from "../../domain/models/book.models.js";

export const getAllBooks = async (req, res) => {
    try {
        const book = await Book.find();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const getBooksWithStockGreaterThanOne = async () => {
    const books = await Book.find();
    const filteredBooks = books.filter(book => book.stock > 0);
    const totalQuantity = filteredBooks.reduce((acc, book) => acc + book.stock, 0);

    return {
        books: filteredBooks,
        totalQuantity,
    };
};

export const createBook = async (bookData) => {
    const book = new Book(bookData);
    return book.save();
};
