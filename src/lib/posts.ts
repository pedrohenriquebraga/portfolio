import { promises as fs } from "fs";
import { Post } from "types/interfaces";
import matter from "gray-matter";
import path from "path";
import readingTime from "reading-time";

const getPosts = async (): Promise<Post[]> => {
  const postsDirectory = path.join(process.cwd(), "posts")
  const filenames = await fs.readdir(postsDirectory)

  return await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, "utf-8")
      const document = matter(fileContents)
      const readingTimeMinutes = readingTime(document.content).minutes
      
      return {
        slug: filename.replace(/\.md$/, ""),
        title: document.data.title,
        description: document.data.description,
        date: document.data.date,
        author: document.data.author,
        banner: document.data.banner,
        readingTime: readingTimeMinutes,
        markdown: document.content
      } as Post
    })
  )
}

export default getPosts
