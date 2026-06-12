import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import IdeasView from "@/components/IdeasView";
import { getIdeas, getProfile } from "@/lib/data";

export default async function IdeesPage() {
  const [profile, ideas] = await Promise.all([getProfile(), getIdeas()]);

  return (
    <>
      <Preloader />
      <div className="index-page">
        <Header />
        <main className="main">
          <IdeasView ideas={ideas} />
        </main>
        <Footer profile={profile} />
      </div>
    </>
  );
}
