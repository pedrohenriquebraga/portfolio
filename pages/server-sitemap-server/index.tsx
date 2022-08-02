import { getServerSideSitemapIndex } from "next-sitemap";
import getPosts from "src/lib/posts";

export const getServerSideProps = async (ctx: any) => {
  const posts = await getPosts();
  const newsSitemaps = posts.map(
    (post) => `${process.env.NEXT_PUBLIC_DOMAIN_URL}${post.slug}`
  );

  const fields = [...newsSitemaps];

  return getServerSideSitemapIndex(ctx, fields);
};

export default function SiteMap() {}
