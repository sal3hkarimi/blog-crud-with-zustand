import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const postsStore = create(
  immer((set) => ({
    posts: { allIds: [], byId: {} },
    getApi: async () => {
      const { data } = await axios.get("http://localhost:5000/posts");
      set((state) => {
        data.map((post) => {
          state.posts.allIds.push(post.id);
          state.posts.byId[post.id] = post;
        });
      });
    },
  }))
);
