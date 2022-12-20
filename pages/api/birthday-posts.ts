import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "src/lib/db";
import BirthdayPost from "src/models/BirthdayPost";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const posts = await BirthdayPost.find({});
        res.status(200).json({ success: true, posts });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "POST":
      try {
        const { name, message } = req.body;
        const post = await BirthdayPost.create({ name, message });

        res.status(201).json({ success: true, post });
      } catch (error: any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
