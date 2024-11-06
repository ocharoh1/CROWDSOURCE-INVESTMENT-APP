import express from 'express';
import { Router } from 'express'
import { getVotes, upvote, downvote } from '../controllers/VotingController';

const router = express.Router();

//get all votes
router.get('/getAllVotes', getVotes);

//upvote an idea
router.post('/upvote/:ideaId', upvote);

//downvote an idea
router.post('/downvote/:ideaId', downvote);

export { router as votingRoutes }

