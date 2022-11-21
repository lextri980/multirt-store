import styled from "styled-components";
import { color } from "themes/colors";

export const InputContainer = styled.div`
  #label {
    position: absolute;
    font-size: 14px;
    position: absolute;
    margin: 9px 0 0 15px;
  }

  input[type='text'] {
    border-radius: 7px;
    border: 2px solid ${color.gray};
    width: 100%;
    padding: 8px 12px 8px 50px;
    font-size: 14px;

    &:hover {
      border: 2px solid ${color.blue};
    }

    &:focus {
      border: 2px solid ${color.blue};
    }
  }
`;
