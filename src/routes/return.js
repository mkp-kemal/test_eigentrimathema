import express from 'express';
import Book from '../models/Book.js';
import Member from '../models/Member.js';

const router = express.Router();


/**
 * @swagger
 * /return:
 *   post:
 *     summary: Return a borrowed book
 *     tags:
 *       - Return Book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Invalid request
 *       404:
 *         description: Member or Book not found
 */
router.post('/', async (req, res) => {
    const { memberCode, bookCode } = req.body;

    const member = await Member.findOne({ code: memberCode }).populate('borrowedBooks.book');
    const book = await Book.findOne({ code: bookCode });

    if (!member || !book) return res.status(404).send('Member or Book not found');

    const borrowedBook = member.borrowedBooks.find(b => b.book.code === bookCode);

    if (!borrowedBook) return res.status(400).send('Book was not borrowed by this member');

    const borrowDate = new Date(borrowedBook.borrowedAt);
    const returnDate = new Date();
    const diffDays = Math.ceil((returnDate - borrowDate) / (1000 * 60 * 60 * 24));

    member.borrowedBooks = member.borrowedBooks.filter(b => b.book.code !== bookCode);
    book.stock += 1;

    if (diffDays > 7) {
        member.penaltyUntil = new Date(returnDate.setDate(returnDate.getDate() + 3));
    }

    await member.save();
    await book.save();

    res.send('Book returned successfully');
});

export default router;
