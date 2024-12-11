import express,{Request,Response} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import {authRoutes} from './routes/authRoutes';
import { ideaRoutes } from './routes/ideaRoutes';
import {votingRoutes} from './routes/votingRoutes';
import { commentRoutes} from'./routes/CommentRoutes';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));


// Use the auth routes
app.use("/api/users",authRoutes);
// Use the idea routes
app.use("/api/ideas", ideaRoutes); 
//use the voting routes
app.use("/api/votes",votingRoutes);
//comment routes
app.use("/api/comments",commentRoutes);

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World');


});


export {app}