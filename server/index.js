import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import { register } from './controllers/authController.js';
import { createPost } from './controllers/postController.js';

// IMPORT API ROUTES
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import postRoute from './routes/postRoute.js';

// CONFIGURATIONS
const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '30mb', extend: true }));
app.use(cors());
app.use('/assets', express.static(path.join(_dirname, 'public/assets')));

// FILE STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/assets');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// ROUTES WITH FILES
app.post('/api/auth/register', upload.single('picture'), register);
app.post('/api/posts/', upload.single('picture'), createPost);

// ROUTES

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

// MONGOOSE SETUP

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');

    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
