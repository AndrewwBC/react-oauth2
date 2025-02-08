import styled from "styled-components";

export const Content = styled.div`
  color: #f9f9f9;
  border: 1px solid red;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 500px;
`;

export const UsernameAndAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 18px;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 999px;
  }
`;

export const Bio = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 8px;
`;

export const FollowersAndFollowing = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;
