import { generateCode } from '../lib/generateCode.js';
import Vote from '../models/voteModel.js';

//Create vote item
export const createVote = async (req, res) => {
    const { title, candidates, startTime, endTime } = req.body;
    try {
        const publisher = req.user.name
        const result = await Vote.create({
            title,
            code: generateCode(6),
            publisher,
            startTime,
            endTime,
            candidates,
        })
        res.status(201).json({ msg: 'Vote created successfully', payload: result });
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

//get votes item
export const getVotes = async (req, res) => {
    try {
        const publisher = req.user.name;
        const votes = await Vote.find({ deletedAt: null, publisher });
        res.status(200).json({ msg: 'Get Votes Successfully', payload: votes })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//get votes by code
export const getVoteByCode = async (req, res) => {
    const { code } = req.params;
    try {
        const vote = await Vote.findOne({ code: code, deletedAt: null });
        if (!vote) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ msg: 'Get Vote Successfully', payload: vote });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};


