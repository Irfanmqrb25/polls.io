import express from "express";
import { createVote, getVoteByCode, getVotes } from "../controller/voteController.js";
import verifyAuth from "../middleware/verifyAuth.js";

const router = express.Router();

router.use(verifyAuth);

router.post('/votes', createVote);
router.get('/votes', getVotes);
router.get('/votes/:code', getVoteByCode);

export default router;