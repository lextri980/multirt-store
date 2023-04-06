import styled from "styled-components";
import { color } from "themes/colors";
import background from "../../assets/img/e-commerce-bg.png";

export const AuthContainer = styled.div`
  background: url(${background});
  width: 100vw;
  height: calc(100vh - 46px);
  display: flex;
  justify-content: center;
  align-items: center;

  .card-header {
    display: flex;
    justify-content: center;
    .title-card {
      font-size: 20px;
      font-weight: 500;
    }
  }
  .forgot-pw {
    &:hover {
      color: ${color.blue};
      cursor: pointer;
    }
  }

  .card-login {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 6px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.9);
    width: 400px;

    @media(max-width: 600px) {
    width: 300px;
    }
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .form-footer {
    display: flex;
    margin-top: 10px;
    justify-content: center;
  }
`;
