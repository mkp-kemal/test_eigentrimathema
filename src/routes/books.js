import express from 'express';
import Book from '../models/Book.js';

const router = express.Router();

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', async (req, res) => {
    const books = await Book.find({});
    res.send(books);
});

//CREATE BOOK
/**
 * @swagger
 * /books/create:
 *   post:
 *     summary: Create a new book
 *     tags:
 *       - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Bad request
 */
router.post('/create', async (req, res) => {
    const { code, title, author, stock } = req.body;

    try {
        const newBook = new Book({ code, title, author, stock });
        await newBook.save();
        res.status(201).send('Book created successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});


/**
 * @swagger
 * /books/stock:
 *   get:
 *     summary: Get all books with stock greater than 1
 *     tags:
 *       - Books
 *     responses:
 *       200:
 *         description: List of books with stock greater than 1
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 books:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Book'
 *                 totalQuantity:
 *                   type: integer
 *                   description: Total quantity of all books in stock
 */
router.get('/stock', async (req, res) => {
    try {
      const books = await Book.find({ stock: { $gt: 0 } });
      const totalQuantity = books.reduce((acc, book) => acc + book.stock, 0);
  
      res.json({
        books,
        totalQuantity,
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

export default router;
