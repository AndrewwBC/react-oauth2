import axios from "axios";
import { useEffect, useState } from "react";
import {
  Bio,
  Content,
  FollowersAndFollowing,
  UsernameAndAvatar,
} from "./styles";
import { GithubUser } from "./types";

import { MdGroups } from "react-icons/md";

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

  if (user)
    return (
      <Content>
        <UsernameAndAvatar>
          <img src={user.avatar_url} alt="" />
          <span>{user.name}</span>
        </UsernameAndAvatar>

        <Bio>
          <span>{user.bio}</span>
        </Bio>

        <FollowersAndFollowing>
          <MdGroups size={26} />
          <div>
            <span>{user.followers} followers -</span>
          </div>
          <div>
            <span>{user.following} following</span>
          </div>
        </FollowersAndFollowing>
      </Content>
    );
};

export default Username;
