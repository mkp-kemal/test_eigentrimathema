import express from 'express';
import { createBookHandler, getAllBooksHandler } from '../controllers/book.controller.js';
import { getAllBooks } from '../../application/services/book.service.js';

const router = express.Router();


/**
 * @swagger
 * /books:
 *   get:
 *     summary: Get all books
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/', getAllBooks);


/**
 * @swagger
 * /books/stock:
 *   get:
 *     summary: Get all books with stock greater than 1
 *     tags: [Books]
 *     responses:
 *       200:
 *         description: The list of books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/stock', getAllBooksHandler);


/**
 * @swagger
 * /books/create:
 *   post:
 *     summary: Create a new book
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The book code
 *                 example: JK-45
 *               title:
 *                 type: string
 *                 description: The book title
 *                 example: Harry Potter
 *               author:
 *                 type: string
 *                 description: The book author
 *                 example: J.K Rowling
 *               stock:
 *                 type: number
 *                 description: The book stock
 *                 example: 1
 *     responses:
 *       201:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.post('/create', createBookHandler);

export default router;
