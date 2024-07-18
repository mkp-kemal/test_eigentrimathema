import express from 'express';
import Book from '../models/Book.js';
import Member from '../models/Member.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { memberCode, bookCode } = req.body;

    const member = await Member.findOne({ code: memberCode });
    const book = await Book.findOne({ code: bookCode });

    if (!member || !book) return res.status(404).send('Member or Book not found');

    if (member.penaltyUntil && new Date() < member.penaltyUntil) {
        return res.status(403).send('Member is currently penalized');
    }

    if (member.borrowedBooks.length >= 2) {
        return res.status(400).send('Member cannot borrow more than 2 books');
    }

    if (book.stock <= 0) {
        return res.status(400).send('Book is not available');
    }

    member.borrowedBooks.push({ book: book._id });
    book.stock -= 1;

    await member.save();
    await book.save();

    res.send('Book borrowed successfully');
});

export default router;
