import express from 'express';
import { Router } from 'express'
import { createComment, deleteComment, getAllComments } from '../controllers/CommentController';

const router = express.Router();

//create a new comment
router.post('/createcomments', createComment);

// //delete comment
router.delete('/deletecomments/:id', deleteComment);
// //get all comments
router.get('/getcomments', getAllComments);

//exporting
export { router as commentRoutes }