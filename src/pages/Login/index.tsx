import { Link } from "react-router-dom";
import { Content, GitContainer, TextContent } from "./styles";

import { IoLogoGithub } from "react-icons/io";

const Login = () => {
  return (
    <Content>
      <TextContent>
        <div>
          <span>OAuth 2.0 - Spring Boot and React</span>
        </div>
      </TextContent>

      <GitContainer>
        <Link to={"http://localhost:8080/oauth2/authorization/github"}>
          <IoLogoGithub size={32} />
          <span>Continue with GitHub</span>
        </Link>
      </GitContainer>
    </Content>
  );
};

export default Login;
