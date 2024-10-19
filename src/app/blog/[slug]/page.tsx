import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.md$/, ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const fullPath = path.join(process.cwd(), "src/posts", `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Head>
        <title>{data.title} | Your Blog Name</title>
        <meta name="description" content={data.excerpt || "Blog post"} />
      </Head>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">
            {data.title}
          </h1>
          <p className="text-gray-800 text-lg mb-4">{data.date}</p>
          {data.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {data.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <div
          className="prose prose-lg prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </>
  );
}
