import { Post } from '../models/Post';
import { Request, Response, NextFunction } from "express";
import { check, validationResult } from "express-validator";

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  await check('content', 'content cannot be blank').isLength({min:1}).run(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send({msg: errors.array()[0].msg}).end();
    return;
  }
  const post = new Post(
    {
      content: req.body.content,
      userId: 'czg',
    }
  );
  post.save(
    (err, post) => {
      if (err) {
        return next(err);
      }
      res.send(post).end();
    },
  )
}

const getAllPosts = async (req: Request, res: Response,
 next: NextFunction) => {
  try {
    const posts = await Post.find().sort({createdAt: -1});
    const postsToSend = posts.map(post => {
      return {
        content: post.content,
        createdAt: +new Date(post.createdAt),
        id: post._id,
        userId: post.userId,
      }
    })
    res.send(postsToSend).end();
  } catch (error) {
    res.status(500).send(error.msg).end();
  }
 }
export {
  createPost,
  getAllPosts,
}