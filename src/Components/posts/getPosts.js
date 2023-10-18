import { useEffect } from "react";
import { postsStore } from "../../store/postsStore";

export default function () {
  const posts = postsStore((state) => state.posts);
  const getPosts = postsStore((state) => state.getApi);
  useEffect(() => {
    if (!posts.allIds.length) {
      getPosts();
    }
  }, []);
}
