import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AllPortfolio from "@/components/AllPortfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import { getProfile, getProjects } from "@/lib/data";

export default async function RealisationsPage() {
  const [profile, projects] = await Promise.all([getProfile(), getProjects()]);

  return (
    <>
      <Preloader />
      <div className="index-page">
        <Header />
        <main className="main">
          <Hero profile={profile} />
          <AllPortfolio projects={projects} />
          <Contact profile={profile} />
        </main>
        <Footer profile={profile} />
      </div>
    </>
  );
}
