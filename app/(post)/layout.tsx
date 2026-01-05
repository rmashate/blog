import "../globals.css";
import { getPosts } from "../get-posts";
import { BackLink } from "./components/back-link";
import { PostMetadata } from "./components/post-metadata";
import { PostFooter } from "./components/post-footer";

export default async function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getPosts();

  return (
    <div className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-12 md:mt-0 flex flex-col px-2 md:px-0">
        <BackLink />
        <PostMetadata posts={posts} />
        <article className="prose prose-neutral dark:prose-invert">
          {children}
        </article>
        <PostFooter posts={posts} />
      </main>
    </div>
  );
}
