import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const voteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    startTime: {
        type: Date,
        required: true,
    },
    endTime: {
        type: Date,
        required: true,
    },
    candidates: [],
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    deletedAt: {
        type: Date,
        default: null
    },
})

export default mongoose.model("Vote", voteSchema);