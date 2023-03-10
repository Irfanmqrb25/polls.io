import express from "express";
import verifyAuth from "../middleware/verifyAuth.js";
import { createParticipant, getParticipants } from "../controller/participantController.js";

const router = express.Router();

router.use(verifyAuth);

router.post('/participants/:code', createParticipant);
router.get('/participants/:code', getParticipants);

export default router;