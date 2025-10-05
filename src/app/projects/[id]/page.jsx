import ProjectPage from "../../../../components/ProjectPage/ProjectPage";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
  ];
}

// Mark as async
export default async function ProjectPageClient({ params }) {
  // await params before destructuring
  const { id } = await params;

  return <ProjectPage id={id} />;
}
