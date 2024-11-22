// import express, { Request, Response } from 'express';
// import { prisma } from '../config/database';
// import bcrypt from 'bcrypt';
// import { validateLoginInputs, validateUserInputs } from '../middleware/validators';
// import { generateToken } from '../utils/authUtilis';

// //register user
// const RegisterUser = async (req: Request, res: Response) => {
//     try {
//         const { name, email, password } = req.body;
//         const validationError = validateUserInputs(name, email, password)
//         if (validationError) {
//             res.status(400).json({ message: validationError })
//             return;
//         }

//         // Check if the user exists using email

//         const existingUser = await prisma.user.findUnique({
//             where: { email: email }
//         });

//         if (existingUser) {
//             res.status(400).json({ message: "User already exists" });
//             return;
//         }
//         //encrypt password
//         const hashedPassword = await bcrypt.hash(password, 10);
//         // Create new user 
//         const newUser = await prisma.user.create({
//             data: {
//                 name: name,
//                 email: email,
//                 password: hashedPassword,
//             },
//         });

//         //generate token and set token in a cookieconsole.log('Register User endpoint
//         const token = generateToken(newUser);
//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'strict',
//             maxAge: 3600000,
//             });

//         res.status(201).json({
//             message: "User created successfully",
//             data: newUser
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//         return;
//     }
// };

// //login user
// const loginUser = async (req: Request, res: Response) => {
//     const { email, password } = req.body;
//     const validationError = validateLoginInputs(email, password)

//         if (validationError) {
//             res.status(400).json({ message: validationError })
//             return;
//     }

//     const existingUser = await prisma.user.findUnique({
//         where: { email: email }
//     });
//     if (!existingUser) {
//         res.status(400).json({ message: "user not found: please register" });
//         return;
//     }
//     else {

//         const passwordMatch = await bcrypt.compare(password, existingUser.password);
//         if (!passwordMatch) {
//             res.status(400).json({ message: "Invalid credentials" });
//             return;
//         }
//         //generate token and set token in a cookie
//         const token = generateToken(existingUser);
//         res.cookie('token', token, {
//             path: '/',
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',  // set to true for HTTPS in production
//             sameSite: 'lax',
//             maxAge: 1000 * 60 * 60 * 24,  // 1 day
//         });
        
//         res.status(200).json({
//             message: "Login successful", token,
//             user: existingUser
//         });
//     }
// };


// //delete user
// const deleteUser = async (req: Request, res: Response) => {
//     try {
//         const { id } = req.params;

//         // Check if the user exists using userId
//         const existingUser = await prisma.user.findUnique({
//             where: { userId: Number(id) }
//         });

//         if (!existingUser) {
//             // If user doesn't exist, return 404
//             res.status(404).json({ message: "User not found" });
//             return;
//         }

//         // Delete the user by userId instead of email to avoid undefined issues
//         await prisma.user.delete({
//             where: { userId: Number(id) }
//         });

//         res.status(200).json({ message: "User deleted successfully" });
//     } catch (error) {
//         console.error("Error deleting user:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// //logout user using token vaalidation
// const logoutUser = async (req: Request, res: Response) => {
//     res.status(200).json({ message: "User logged out" });
// };



// export { RegisterUser, loginUser, logoutUser, deleteUser };


import express, { Request, Response } from 'express';
import { prisma } from '../config/database';
import bcrypt from 'bcrypt';
import { validateLoginInputs, validateUserInputs } from '../middleware/validators';
import { generateToken } from '../utils/authUtilis';

//register user
const RegisterUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;
        const validationError = validateUserInputs(name, email, password)
        if (validationError) {
            res.status(400).json({ message: validationError })
            return;
        }

        // Check if the user exists using email

        const existingUser = await prisma.user.findUnique({
            where: { email: email }
        });

        if (existingUser) {
            res.status(400).json({ message: "User already exists" });
            return;
        }
        //encrypt password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user 
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword,
            },
        });

        //generate token and set token in a cookieconsole.log('Register User endpoint
        const token = generateToken(newUser);
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3600000,
            });

        res.status(201).json({
            message: "User created successfully",
            data: newUser
        });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        return;
    }
};

//login user
const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const validationError = validateLoginInputs(email, password)

        if (validationError) {
            res.status(400).json({ message: validationError })
            return;
    }

    const existingUser = await prisma.user.findUnique({
        where: { email: email }
    });
    if (!existingUser) {
        res.status(400).json({ message: "user not found: please register" });
        return;
    }
    else {

        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) {
            res.status(400).json({ message: "Invalid credentials" });
            return;
        }
        //generate token and set token in a cookie
        const token = generateToken(existingUser);
        res.cookie('token', token, {
            path: '/',
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',  // set to true for HTTPS in production
            sameSite: 'lax',
            maxAge: 1000 * 60 * 60 * 24,  // 1 day
        });
        
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: existingUser.userId,
                name: existingUser.name,
                email: existingUser.email
            }
        });
    }
};


//delete user
const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        // Check if the user exists using userId
        const existingUser = await prisma.user.findUnique({
            where: { userId: Number(id) }
        });

        if (!existingUser) {
            // If user doesn't exist, return 404
            res.status(404).json({ message: "User not found" });
            return;
        }

        // Delete the user by userId instead of email to avoid undefined issues
        await prisma.user.delete({
            where: { userId: Number(id) }
        });

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

//logout user using token vaalidation
const logoutUser = async (req: Request, res: Response) => {
    res.status(200).json({ message: "User logged out" });
};

export { RegisterUser, loginUser, logoutUser, deleteUser };

