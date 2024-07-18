import mongoose from 'mongoose'

const memberSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    borrowedBooks: [{
        book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
        borrowedAt: { type: Date, default: Date.now }
    }],
    penaltyUntil: { type: Date, default: null },

},
    {
        timestamps: true,
        versionKey: false
    });

const Member = mongoose.model('Member', memberSchema);

export default Member;

