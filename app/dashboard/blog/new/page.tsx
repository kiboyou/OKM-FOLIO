import PostForm from "../PostForm";
import { createPost } from "../actions";

export default function NewPostPage() {
  return (
    <>
      <h1>Nouvel article</h1>
      <PostForm action={createPost} />
    </>
  );
}
