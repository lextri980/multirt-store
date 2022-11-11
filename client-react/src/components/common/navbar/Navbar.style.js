import styled, { keyframes } from "styled-components";
import { color } from "themes/colors/index";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  margin-bottom: 10px;

  .logo-web {
    display: flex;
    margin-right: 10px;
    border: ${color.black} 2px solid;
    border-radius: 50px;
    padding: 5px;

    &:hover {
      color: ${color.blue};
      border: ${color.blue} 2px solid;
      animation: ${rotate} 1s linear infinite;
    }
  }

  .badge-cart {
    > span {
      background-color: ${color.redP};
    }
  }

  .secondary-menu {
    display: flex;
    justify-content: center;
    margin: 10px auto 0;
    width: 70vw;

    & > button {
      display: flex;
      justify-content: space-between;
      background-color: ${color.blue};
      width: 170px;
    }
  }

  .search-input {
    width: 30vw;

    &:focus-within {
      .search-icon {
        color: black;
      }
    }

    &:hover {
      .search-icon {
        color: black;
      }
    }
  }

  .search-icon {
    color: #d8d8d8;
  }

  .ml-20 {
    margin-left: 20px;
  }

  .switch-theme-light {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.blue};
      }
    }
  }
  .switch-theme-dark {
    div {
      background-color: ${color.blueP};

      &:hover {
        background-color: ${color.blueP};
      }

      &:not(&:active) {
        background-color: ${color.blackP};
      }
    }
  }
`;
