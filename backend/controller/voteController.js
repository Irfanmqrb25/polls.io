import { generateCode } from '../lib/generateCode.js';
import Vote from '../models/voteModel.js';
import Participant from '../models/participantModel.js';

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

        //get participnat of the vote
        const participants = await Participant.find({ code }, { candidate: true, name: true, createdAt: true }).exec();

        let candidates = [];

        if (participants) {
            candidates = vote?.candidates.map((candidate) => {
                const votes = participants.filter(participant => participant.candidate === candidate.name).length || 0;
                return { ...candidate, votes }
            })
        }

        const clientVote = {
            title: vote.title,
            publisher: vote.publisher,
            code: vote.code,
            candidates: candidates,
            startTime: String(vote.startTime),
            endTime: String(vote.endTime),
            createdAt: String(vote.createdAt),
            totalVotes: candidates ? candidates?.reduce((acc, candidate) => acc + (candidate.votes ? candidate.votes : 0), 0) : 0,
        }

        res.json({ msg: 'Get Vote Successfully', payload: clientVote });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: err.message });
    }
};


