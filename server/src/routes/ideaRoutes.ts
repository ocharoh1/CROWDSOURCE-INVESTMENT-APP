import express from 'express';
import { Router } from 'express'
import {
    createIdea, deleteIdea, getIdeas, updateIdea, getIdea
  
} from '../controllers/ideaController';

const router = express.Router();

// Route to create a new idea
router.post('/createideas', createIdea);
//route to get ideas
router.get('/getideas', getIdeas);
//route to delete idea
router.delete('/deleteideas/:id', deleteIdea);
//route to update idea
router.patch('/updateideas/:id', updateIdea);
//route to get idea by id
router.get('/getideasbyid/:id', getIdea);



export { router as ideaRoutes }