import blogs from "../../../data/blogs";

export function generateStaticParams() {
  return blogs.map((_, index) => ({
    id: index.toString(),
  }));
}

export default async function BlogPage({ params }) {
  const { id } = await params; // ✅ await is required
  const blog = blogs[id];

  if (!blog) {
    return <h1 style={{ padding: "2rem" }}>Blog not found</h1>;
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{blog.title}</h1>
      <p>
        {blog.date} | {blog.readTime}
      </p>
      <p>{blog.description}</p>
      <article style={{ marginTop: "1rem", lineHeight: "1.6" }}>
        {blog.content}
      </article>
    </main>
  );
}
