import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import {
  getCertifications,
  getEducation,
  getFeaturedProjects,
  getProfile,
  getServices,
  getSkills,
} from "@/lib/data";

export default async function HomePage() {
  const [profile, projects, services, skills, certifications, education] =
    await Promise.all([
      getProfile(),
      getFeaturedProjects(6),
      getServices(),
      getSkills(),
      getCertifications(),
      getEducation(),
    ]);

  return (
    <>
      <Preloader />
      <div className="index-page">
        <Header />
        <main className="main">
          <Hero profile={profile} />
          <About profile={profile} skills={skills} />
          <Resume
            profile={profile}
            education={education}
            certifications={certifications}
          />
          <Portfolio projects={projects} />
          <Services services={services} />
          <Contact profile={profile} />
        </main>
        <Footer profile={profile} />
      </div>
    </>
  );
}
