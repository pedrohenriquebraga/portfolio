import { GetServerSideProps } from "next";
// @ts-ignore
import { getServerSideSitemapIndex } from "next-sitemap";
import getPosts from "@lib/posts";

export const getServerSideProps = async (ctx: GetServerSideProps) => {
  const posts = await getPosts();
  const newsSitemaps = posts.map(
    (post) => `${process.env.NEXT_PUBLIC_DOMAIN_URL}${post.slug}`
  );

  const fields = [...newsSitemaps];

  // @ts-ignore
  return getServerSideSitemapIndex(ctx, fields);
};

export default function SiteMap() {}
