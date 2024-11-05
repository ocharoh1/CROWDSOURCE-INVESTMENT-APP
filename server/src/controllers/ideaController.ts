import  { Request, Response } from 'express';
import { prisma } from '../config/database';
import { validateIdeaInputs } from '../middleware/validators';

const createIdea = async (req: Request, res: Response) => {
    try {
        const { title, description,category, estimatedReturn } = req.body;
        const validationError=validateIdeaInputs(title, description, category, estimatedReturn)
        if (validationError) {
            res.status(400).json({ message: validationError })
            return;
        }

        const userId=5
             // Create the new idea
             const newIdea = await prisma.idea.create({
                data: {
                    title: title,
                    description: description,
                    category: category,
                    estimatedReturn: estimatedReturn,
                    authorId:userId,
                },
            });       

        res.status(201).json({
            message: "Idea created successfully",
            data: newIdea
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
        return;
    }
}

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
        const idea=  await prisma.idea.update({
            where: { id: Number(id) },
            data: {
                title: title,
                description: description,
                category: category,
                estimatedReturn: estimatedReturn,
            }
        });

        res.status(200).json({ 
            message: "Idea updated successfully" ,
            updatedidea:idea
        
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


export { createIdea, deleteIdea, updateIdea, getIdeas, getIdea };