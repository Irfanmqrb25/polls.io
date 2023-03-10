import Participant from "../models/participantModel.js";


export const createParticipant = async (req, res) => {
    const { code } = req.params;
    try {
        const result = await Participant.create({
            name: req.user.name,
            candidate: req.body.candidate,
            code,
        })
        res.status(200).json({ msg: 'seccess', payload: result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getParticipants = async (req, res) => {
    const { code } = req.params;
    try {
        const result = await Participant.findOne({ name: req.user.name, code });
        res.status(200).json({ msg: 'seccess', payload: result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}