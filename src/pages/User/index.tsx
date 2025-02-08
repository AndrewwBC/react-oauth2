import axios from "axios";
import { useEffect, useState } from "react";

const Username = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const data = await axios.get("http://localhost:8080/user", {
      withCredentials: true,
    });
    const user = data.data;
    setUser(user);
    console.log(user);
  }

  return (
    <>
      <div>
        <span>{user?.name}</span>
      </div>
    </>
  );
};

export default Username;
