import express from 'express';
import { borrowBookHandler, createMemberHandler, getAllMembersHandler, returnBookHandler } from '../controllers/member.cotnroller.js';

const router = express.Router();

router.get('/', getAllMembersHandler);
router.post('/create', createMemberHandler);
router.post('/borrow', borrowBookHandler);
router.post('/return', returnBookHandler);

export default router;
