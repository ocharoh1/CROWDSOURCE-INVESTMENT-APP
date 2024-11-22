// path between response and request
import express from 'express';
import { Router } from 'express';
import { RegisterUser,deleteUser,loginUser } from '../controllers/authController';

const router = Router();

router.post('/register',RegisterUser )
router.post('/login',loginUser )
router.delete('/delete/:id',deleteUser )
// router.post('/register',RegisterUser )

export   {router as authRoutes}

