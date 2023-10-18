import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

function uuid() {
  const val1 = Date.now().toString(36);
  const val2 = Math.random().toString(36).substr(2);

  return val1 + val2;
}

export const postsStore = create(
  immer((set, get) => ({
    // init posts
    posts: { allIds: [], byId: {} },

    // get data from api
    getApi: async () => {
      const { data } = await axios.get("http://localhost:5000/posts");
      set((state) => {
        data.map((post) => {
          state.posts.allIds.push(post.id);
          state.posts.byId[post.id] = post;
        });
      });
    },

    // add new post
    addPost: async (newPost) => {
      const response = await axios.post("http://localhost:5000/posts", {
        id: uuid(),
        ...newPost,
        cover: "https://picsum.photos/200/200",
      });
      set((state) => {
        state.posts.allIds.push(response.data.id);
        state.posts.byId[response.data.id] = response.data;
      });

      return response;
    },

    deletePost: async (postId) => {
      const response = await axios.delete(
        `http://localhost:5000/posts/${postId}`
      );
      return response;
    },
  }))
);
