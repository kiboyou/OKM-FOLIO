import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import BlogPostView from "@/components/BlogPostView";
import { getBlogPostBySlug, getProfile } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [profile, post] = await Promise.all([
    getProfile(),
    getBlogPostBySlug(slug),
  ]);

  if (!post) notFound();

  return (
    <>
      <Preloader />
      <div className="index-page">
        <Header />
        <BlogPostView post={post} />
        <Footer profile={profile} />
      </div>
    </>
  );
}
