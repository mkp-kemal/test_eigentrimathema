import Member from "../../domain/models/member.models.js";

export const getAllMembers = async () => {
    const members = await Member.find().populate('borrowedBooks.book');
    return members.map(member => ({
        code: member.code,
        name: member.name,
        borrowedBooksCount: member.borrowedBooks.length,
    }));
};

export const createMember = async (memberData) => {
    const member = new Member(memberData);
    return member.save();
};
