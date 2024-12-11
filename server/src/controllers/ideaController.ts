import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { validateIdeaInputs } from '../middleware/validators';
import { getActiveUserFromToken } from '../utils/authUtilis';
// Route handler to create an idea
const createIdea = async (req: any, res: Response) => {
    try {
        // Get the active user from the token in the cookies
        const user = await getActiveUserFromToken(req);

        // Check if the user is authenticated
        if (!user) {
          res.status(401).json({ message: 'User not authenticated' });
            return
        }

        const { title, description, category, estimatedReturn } = req.body;

        // Create the new idea with the author's userId
        const newIdea = await prisma.idea.create({
            data: {
                title,
                description,
                category,
                estimatedReturn,
                authorId: user.userId, // Set authorId from the authenticated user
            },
        });

         res.status(201).json({
            message: "Idea created successfully",
            data: newIdea,
        });
    } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Server error" });
    return
    }
};


//delete idea
const deleteIdea = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Check if the idea exists
        const existingIdea = await prisma.idea.findUnique({
            where: { id: Number(id) }
        });

        if (!existingIdea) {
            res.status(404).json({ message: "Idea not found" });
            return;
        }

        // Delete the idea
        await prisma.idea.delete({
            where: { id: Number(id) }
        });

        res.status(200).json({ message: "Idea deleted successfully" });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}


//update idea
const updateIdea = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { title, description, category, estimatedReturn } = req.body;

        // Check if the idea exists
        const existingIdea = await prisma.idea.findUnique({
            where: { id: Number(id) }
        });

        if (!existingIdea) {
            res.status(404).json({ message: "Idea not found" });
            return;
        }

        //**** */ Update the idea
        const idea = await prisma.idea.update({
            where: { id: Number(id) },
            data: {
                title: title,
                description: description,
                category: category,
                estimatedReturn: estimatedReturn,
            }
        });

        res.status(200).json({
            message: "Idea updated successfully",
            updatedidea: idea

        });
        return;
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}

//get ideas 
const getIdeas = async (req: Request, res: Response) => {
    try {
        const ideas = await prisma.idea.findMany();

        res.status(200).json({ data: ideas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}

//get idea by title and category
const getIdeasByTitleAndCategory = async (req: Request, res: Response) => {
    try {
        const { title, category } = req.query;

        const ideas = await prisma.idea.findMany({
            where: {
                title: {
                    contains: title as string
                },
                category: {
                    contains: category as string
                }
            }
        });

        res.status(200).json({ data: ideas });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}


//get idea by id
const getIdea = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const idea = await prisma.idea.findUnique({
            where: { id: Number(id) }
        });

        if (!idea) {
            res.status(404).json({ message: "Idea not found" });
            return;
        }

        res.status(200).json({ data: idea });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}


export { createIdea, deleteIdea, updateIdea, getIdeas, getIdea, getIdeasByTitleAndCategory };