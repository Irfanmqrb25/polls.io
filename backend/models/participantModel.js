import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const participantSecehma = new Schema({
    name: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    candidate: {
        type: String,
    },
    code: {
        type: String,
    }
});

export default mongoose.model('Participant', participantSecehma);