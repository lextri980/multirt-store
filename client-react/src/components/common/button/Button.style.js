import styled from "styled-components";
import { color } from "themes/colors";

export const ButtonContainer = styled.div`
  .primary {
    background-color: ${color.blue};
  }
  .warning {
    background-color: ${color.orangeP};
  }
  .danger {
    background-color: ${color.redP};
  }
  .secondary {
    background-color: ${color.navi};
  }
  .success {
    background-color: ${color.green};
  }
  .white {
    background-color: ${color.white};
    color: ${color.blackP};
  }
  .white-red {
    background-color: ${color.white};
    color: ${color.redP};
  }
  button:disabled,
  button[disabled] {
    opacity: 0.7;
    color: ${color.white};
  }
`;

export const ButtonLightContainer = styled.button`
  display: flex;
  justify-content: space-between;
  border: none;
  border-radius: 10px;
  background-color: ${color.white};
  color: ${color.blue};
  padding: 8px 15px;
  transition: background-color 0.5s;

  &:hover {
    background-color: #F1F1F1;
    cursor: pointer;
    transition: background-color 0.5s;
    border-radius: 10px;
  }

  p {
    font-size: 14px;
    margin-right: 5px;
  }
`;
