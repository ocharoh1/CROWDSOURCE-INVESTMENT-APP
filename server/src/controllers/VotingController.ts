import  { Request, Response } from 'express';
import { prisma } from '../config/database';

// Get all votes
const getVotes = async (req: Request, res: Response) => {
    try {
        const votes = await prisma.vote.findMany();
        res.status(200).json({ data: votes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}

//upvoting an idea
const upvote = async (req: Request, res: Response) => {
    try {
        const { ideaId } = req.params;

        const idea = await prisma.idea.findUnique({
            where: { id: Number(ideaId) }
        });

        if (!idea) {
            res.status(404).json({ message: "Idea not found" });
            return;
        }

        const vote = await prisma.vote.create({
            data: {
            ideaId: Number(ideaId),
            userId: 1,
            isVoted: true
            }
        });

        res.status(200).json({ message: "Idea upvoted successfully", data: vote });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}

//downvoting an idea
const downvote = async (req: Request, res: Response) => {
    try {
        const { ideaId } = req.params;

        const idea = await prisma.idea.findUnique({
            where: { id: Number(ideaId) }
        });

        if (!idea) {
            res.status(404).json({ message: "Idea not found" });
            return;
        }

        const vote = await prisma.vote.create({
            data: {
                ideaId: Number(ideaId),
                userId: 1,
                isVoted: false

            }
        });

        res.status(200).json({ message: "Idea downvoted successfully", data: vote });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}


export { getVotes, upvote, downvote, };