import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import postRouter from './routes/posts.js';
import userRouter from './routes/users.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRouter);
app.use('/user', userRouter);

connectDB();

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
