import { Request, Response } from 'express';
import { prisma } from '../config/database';
import { getActiveUserFromToken } from '../utils/authUtilis';

//create a new comment
const createComment = async (req: any, res: Response) => {
   
        try {
            // Get the active user from the token in the cookies
            const user = await getActiveUserFromToken(req);

            // Check if the user is authenticated
            if (!user) {
                res.status(401).json({ message: 'User not authenticated' });
                return
            }

            const { content, ideaId, } = req.body;

            //create new comment
            const createComment = await prisma.comment.create({
                data: {
                    content,
                    ideaId,
                    authorId: user.userId,
                },
            });

            res.status(201).json({
                message: "Comment created successfully",
                data: createComment,
            });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
            return;
        }

    }

    //delete comment
    const deleteComment = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            // Check if the comment exists
            const existingComment = await prisma.comment.findUnique({
                where: { id: Number(id) }
            });

            if (!existingComment) {
                res.status(404).json({ message: "Comment not found" });
                return;
            }

            // Delete the comment
            await prisma.comment.delete({
                where: { id: Number(id) }
            });

            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
            return;
        }
    }

    //get all comments
    const getAllComments = async (req: Request, res: Response) => {
        try {
            const allComments = await prisma.comment.findMany();
            res.status(200).json(allComments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
            return;
        }
    }

    //export the functions
    export { createComment, deleteComment, getAllComments };
