import { useEffect } from "react";
import { usersStore } from "../../store/usersStore";

export default function () {
  const users = usersStore((state) => state.users);
  const getUsers = usersStore((state) => state.getApi);
  useEffect(() => {
    if (!users.allIds.length) {
      getUsers();
    }
  }, []);
}
