import express from 'express';
import { borrowBookHandler, createMemberHandler, getAllMembersHandler, returnBookHandler } from '../controllers/member.cotnroller.js';

const router = express.Router();

/**
 * @swagger
 * /members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: The list of members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Member'
 */
router.get('/', getAllMembersHandler);


/**
 * @swagger
 * /members/create:
 *   post:
 *     summary: Create a new member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *                 description: The member code
 *                 example: M004
 *               name:
 *                 type: string
 *                 description: The member name
 *                 example: Budi
 *               borrowedBooks:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     book:
 *                       type: string
 *                       description: The ObjectId of the borrowed book
 *                       example: 60c72b2f9f1b2c001f8e4b2d
 *                     borrowedAt:
 *                       type: string
 *                       format: date-time
 *                       description: The date when the book was borrowed
 *                       example: 2024-07-18T15:30:00.000Z
 *               penaltyUntil:
 *                 type: string
 *                 format: date-time
 *                 description: The date until the member is penalized
 *                 example: null
 *     responses:
 *       201:
 *         description: The member was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Member'
 *       500:
 *         description: Some server error
 */
router.post('/create', createMemberHandler);


/**
 * @swagger
 * /members/borrow:
 *   post:
 *     summary: Borrow a book
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 description: The code of the member borrowing the book
 *               bookCode:
 *                 type: string
 *                 description: The code of the book to be borrowed
 *     responses:
 *       200:
 *         description: Book borrowed successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Member or Book not found
 */
router.post('/borrow', borrowBookHandler);


/**
 * @swagger
 * /members/return:
 *   post:
 *     summary: Return a book
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *                 description: The code of the member returning the book
 *               bookCode:
 *                 type: string
 *                 description: The code of the book to be returned
 *     responses:
 *       200:
 *         description: Book returned successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Member or Book not found
 */
router.post('/return', returnBookHandler);

export default router;
