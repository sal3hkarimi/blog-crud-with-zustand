import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

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
      set((state) => {
        removeFromArray(state.posts.allIds, postId);
        delete state.posts.byId[postId];
      });
      return response;
    },

    updatePost: async (postId, updatePostData) => {
      const updateData = {
        id: postId,
        ...updatePostData,
        cover: "https://picsum.photos/200/200",
      };
      const response = await axios.put(
        `http://localhost:5000/posts/${postId}`,
        updateData
      );
      set((state) => {
        state.posts.byId[postId] = updateData;
      });
      return response;
    },
  }))
);

function removeFromArray(array, item) {
  const index = array.indexOf(item);
  if (index > -1) {
    array.splice(index, 1);
  }
  return array;
}

function uuid() {
  const val1 = Date.now().toString(36);
  const val2 = Math.random().toString(36).substr(2);

  return val1 + val2;
}
