import express from 'express';
import Member from '../models/Member.js';

const router = express.Router();

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Get all members
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: List of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 */
router.get('/', async (req, res) => {
    const members = await Member.find({}).populate('borrowedBooks.book');
    res.send(members);
});


// CREATE MEMBER
/**
 * @swagger
 * /members/create:
 *   post:
 *     summary: Create a new member
 *     tags:
 *       - Members
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Member created successfully
 *       400:
 *         description: Bad request
 */
router.post('/create', async (req, res) => {
    const { code, name } = req.body;

    try {
        const newMember = new Member({ code, name });
        await newMember.save();
        res.status(201).send('Member created successfully');
    } catch (err) {
        res.status(400).send(err.message);
    }
});


/**
 * @swagger
 * /members/borrowedBooksCount:
 *   get:
 *     summary: Get all members and the number of books borrowed by each member
 *     tags:
 *       - Members
 *     responses:
 *       200:
 *         description: List of members with the number of borrowed books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   code:
 *                     type: string
 *                   name:
 *                     type: string
 *                   borrowedBooksCount:
 *                     type: integer
 */
router.get('/borrowedBooksCount', async (req, res) => {
    try {
      const members = await Member.find({}).populate('borrowedBooks.book');
      const membersWithBorrowedBooksCount = members.map(member => ({
        code: member.code,
        name: member.name,
        borrowedBooksCount: member.borrowedBooks.length,
      }));
  
      res.json(membersWithBorrowedBooksCount);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
export default router;
