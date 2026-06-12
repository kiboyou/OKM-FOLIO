import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BlogList from "@/components/BlogList";
import { getBlogPosts, getProfile } from "@/lib/data";

export default async function BlogPage() {
  const [profile, posts] = await Promise.all([getProfile(), getBlogPosts()]);

  return (
    <>
      <Preloader />
      <div className="index-page">
        <Header />
        <main className="main">
          <BlogList posts={posts} />
        </main>
        <Footer profile={profile} />
      </div>
    </>
  );
}
