import express,{Request,Response} from 'express';
import cors from 'cors';
import {authRoutes} from './routes/authRoutes';
import { ideaRoutes } from './routes/ideaRoutes';
const app = express();
app.use(cors());
app.use(express.json());


// Use the auth routes
app.use("/api/users",authRoutes);
// Use the idea routes
app.use("/api/ideas", ideaRoutes); 

app.get('/',(req:Request,res:Response)=>{
    res.send('Hello World');


});


export {app}