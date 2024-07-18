import Book from "../../domain/models/book.models.js";
import Member from "../../domain/models/member.models.js";

export const returnBook = async (memberCode, bookCode) => {
    const member = await Member.findOne({ code: memberCode }).populate('borrowedBooks.book');
    const book = await Book.findOne({ code: bookCode });

    if (!member || !book) throw new Error('Member or Book not found');

    const borrowedBook = member.borrowedBooks.find(b => b.book.code === bookCode);
    if (!borrowedBook) throw new Error('Book was not borrowed by this member');

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

    return 'Book returned successfully';
};

export const borrowBook = async (memberCode, bookCode) => {
    const member = await Member.findOne({ code: memberCode }).populate('borrowedBooks.book');
    const book = await Book.findOne({ code: bookCode });

    if (!member || !book) throw new Error('Member or Book not found');
    if (member.borrowedBooks.length >= 2) throw new Error('Member cannot borrow more than 2 books');
    if (member.penaltyUntil && member.penaltyUntil > new Date()) throw new Error('Member is currently penalized');
    if (member.borrowedBooks.some(b => b.book.code === bookCode)) throw new Error('Member has already borrowed this book');
    if (book.stock <= 0) throw new Error('Book is not available');

    member.borrowedBooks.push({ book: book._id, borrowedAt: new Date() });
    book.stock -= 1;

    await member.save();
    await book.save();

    return 'Book borrowed successfully';
};

