import mongoose from "mongoose";

export type PostDocument = mongoose.Document & {
  content: string;
  userId: string;
  createdAt: string;
}

const postSchema = new mongoose.Schema(
  {
    content: String,
    userId: String,
  },
  { timestamps: true }
);

export const Post = mongoose.model<PostDocument>('Post', postSchema);