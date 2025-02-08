import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #f9f9f9;
  padding: 48px;
  gap: 8px;
`;

export const TextContent = styled.div`
  padding: 8px;
  border-bottom: 1px solid #e9e9e9;
  div {
    span {
      font-size: 48px;
    }
  }
`;

export const GitContainer = styled.div`
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 8px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 12px 18px;
    text-decoration: none;
    font-size: 18px;
    color: #f9f9f9;
  }
`;
