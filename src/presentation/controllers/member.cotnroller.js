import { createMember, getAllMembers } from "../../application/services/member.service.js";
import { borrowBook, returnBook } from "../../application/services/return.service.js";

export const getAllMembersHandler = async (req, res) => {
    try {
        const members = await getAllMembers();
        res.json(members);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const createMemberHandler = async (req, res) => {
    try {
        const member = await createMember(req.body);
        res.status(201).json(member);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

export const returnBookHandler = async (req, res) => {
    try {
        const { memberCode, bookCode } = req.body;
        const message = await returnBook(memberCode, bookCode);
        res.send(message);
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
};

export const borrowBookHandler = async (req, res) => {
    try {
        const { memberCode, bookCode } = req.body;
        const message = await borrowBook(memberCode, bookCode);
        res.send(message);
    } catch (err) {
        console.error(err.message);
        res.status(400).send(err.message);
    }
};
