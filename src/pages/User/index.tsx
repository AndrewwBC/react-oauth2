import axios from "axios";
import { useEffect, useState } from "react";
import { Content } from "./styles";
import { GithubUser } from "./types";

const Username = () => {
  const [user, setUser] = useState<GithubUser | null>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data: { data: GithubUser } = await axios.get(
      "http://localhost:8080/user",
      {
        withCredentials: true,
      }
    );
    const user = data.data;
    setUser(user);
    console.log(user);
  }

  if (user) return <Content></Content>;
};

export default Username;
