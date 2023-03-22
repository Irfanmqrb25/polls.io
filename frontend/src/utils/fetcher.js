import axios from "axios";

//Getting All Votes
export const getAllVotes = async (user) => {
    const response = await axios.get('http://localhost:5000/api/vote/votes', {
        headers: { 'Authorization': `Bearer ${user}` }
    })
    return { data: response.data.payload }
}

//Create Vote Item
export const createVoteItem = async (user, title, startTime, endTime, candidates) => {
    await axios.post("http://localhost:5000/api/vote/votes", {
        title,
        startTime,
        endTime,
        candidates,
    }, {
        headers: { 'Authorization': `Bearer ${user}` }
    })
}

//getting vote by code
export const getVoteByCode = async (code, user) => {
    const response = await axios.get(`http://localhost:5000/api/vote/votes/${code}`, {
        headers: { 'Authorization': `Bearer ${user}` }
    })
    return { data: response.data.payload }
}

//create participants by code
export const createParticipantsByCode = async (code, user, candidate) => {
    await axios.post(`http://localhost:5000/api/participant/participants/${code}`,
        {
            candidate: candidate,
        },
        {
            headers: { 'Authorization': `Bearer ${user}` },
        })
}

//update Vote
export const updateVoteItem = async (user, title, startTime, endTime, candidates, code) => {
    await axios.put(`http://localhost:5000/api/vote/votes/${code}`, {
        title,
        startTime,
        endTime,
        candidates,
    }, {
        headers: { 'Authorization': `Bearer ${user}` }
    })
}

//soft delete vote
export const softDeleteVote = async (user, code) => {
    await axios.delete(`http://localhost:5000/api/vote/votes/${code}`, {
        headers: { 'Authorization': `Bearer ${user}` }
    })
}