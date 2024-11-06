//authenticating jwt token
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();
export const authenticateJWT = (req: any, res: Response, next: NextFunction) => {
    const token = req.cookies.token; // Make sure the token is in cookies
    
    if (!token) {
     res.status(401).json({ message: 'Unauthorized' });
     return
    }

    try {
        // Decode the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: number };
        req.user = { id: decoded.userId }; // Attach user info to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
         res.status(403).json({ message: 'Invalid token' });
         return
    }
};
