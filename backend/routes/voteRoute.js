import express from "express";
import { createVote, getVoteByCode, getVotes, softDelete, updateVote } from "../controller/voteController.js";
import verifyAuth from "../middleware/verifyAuth.js";

const router = express.Router();

router.use(verifyAuth);

router.post('/votes', createVote);
router.get('/votes', getVotes);
router.get('/votes/:code', getVoteByCode);
router.put('/votes/:code', updateVote);
router.delete('/votes/:code', softDelete);

export default router;