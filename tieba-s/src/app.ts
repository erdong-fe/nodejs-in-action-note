import express from "express";
import mongoose from "mongoose";
import mongo from "connect-mongo";
import bodyParser from "body-parser";
import { MONGODB_URI, SESSION_SECRET } from "./utils/secrets";
import { createPost, getAllPosts } from './controllers/post';

const app = express();

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
).then(
  () => { console.log('MongoDB connection successfully!');}
).catch(
  (err) => { console.log('MongoDB connection error. Please make sure MongoDB is running.' + err); }
)

app.set("port", process.env.PORT || 9090);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/v1/posts', createPost);
app.get('/v1/posts/all', getAllPosts)

export default app;