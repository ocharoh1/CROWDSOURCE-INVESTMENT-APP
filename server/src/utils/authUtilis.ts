import jwt, { JwtPayload } from 'jsonwebtoken';
import { prisma } from '../config/database';

interface User {
    userId: number;
}
//generate jwt (called when you want to generate a token)
export const generateToken = (user: User): string => {
    const payload= { id: user.userId };
    const secretKey = process.env.JWT_SECRET || 'your-secret-key';
    const expiresIn = '1h';

    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
};


//utility function to retrieve active user from token in cookies

export const getActiveUserFromToken = async (req: any) => {
    const token = req.cookies.token; // Assuming JWT token is stored in cookies

    // Log the token to check its value
    console.log("Token:", token);

    if (!token) {
        console.log("No token found in cookies");
        return null;
    }

    try {
        const secretJWT = process.env.JWT_SECRET
        if (!secretJWT) {
            console.log("JWT secret is missing");
            return null;
        }
        // Verify the token and extract the payload (including userId)
        const decoded = jwt.verify(token,secretJWT ) as JwtPayload;


        // Log the decoded data to see if it contains userId
        console.log("Decoded Token:", decoded);

        // if (!decoded.userId) {
        //     console.log("User ID is missing in the token");
        //     return null;
        // }

        // Retrieve the user from the database using the userId from the token
        const user = await prisma.user.findUnique({
            where: { userId: decoded.id}, // Use the userId from the decoded token
            select: { userId: true, name: true, email: true } // Select relevant fields
        });

        if (!user) {
            console.log("User not found");
            return null;
        }

        return user;
    } catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
};
