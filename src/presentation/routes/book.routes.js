import express from 'express';
import { createBookHandler, getAllBooksHandler } from '../controllers/book.controller.js';
import { getAllBooks } from '../../application/services/book.service.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/stock', getAllBooksHandler);
router.post('/create', createBookHandler);

export default router;
