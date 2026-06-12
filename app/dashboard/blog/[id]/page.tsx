import { notFound } from "next/navigation";
import { getBlogPost } from "@/lib/admin-data";
import PostForm from "../PostForm";
import { updatePost } from "../actions";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPost(id);
  if (!post) notFound();
  return (
    <>
      <h1>Modifier : {post.title_fr}</h1>
      <PostForm action={updatePost} post={post} />
    </>
  );
}
