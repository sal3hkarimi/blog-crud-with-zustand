import axios from "axios";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const usersStore = create(
  immer((set) => ({
    // init users
    users: { allIds: [], byId: {} },

    // get data from api
    getApi: async () => {
      const { data } = await axios.get("http://localhost:5000/users");
      set((state) => {
        data.map((user) => {
          state.users.allIds.push(user.id);
          state.users.byId[user.id] = user;
        });
      });
    },
  }))
);
