import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import RealisationDetailView from "@/components/RealisationDetailView";
import ProjectNotFound from "@/components/ProjectNotFound";
import { getProfile, getProjectBySlug } from "@/lib/data";

export default async function RealisationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [profile, project] = await Promise.all([
    getProfile(),
    getProjectBySlug(slug),
  ]);

  return (
    <>
      <Preloader />
      <div>
        <Header />
        {project ? <RealisationDetailView project={project} /> : <ProjectNotFound />}
        <Footer profile={profile} />
      </div>
    </>
  );
}
