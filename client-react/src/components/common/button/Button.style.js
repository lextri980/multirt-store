import styled from "styled-components";
import { color } from "themes/colors";

export const ButtonContainer = styled.div`
  .primary{
    background-color: ${color.blue} ;
  }
  .warning{
    background-color: ${color.orangeP};
  }
  .danger{
    background-color: ${color.redP} ;
  }
  .secondary{
    background-color: ${color.navi} ;
  }
  .success{
    background-color: ${color.green} ;
`;
