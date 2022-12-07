import styled from "styled-components";

export const CardTypeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 30px 20px;
  margin: 30px 7vw;

  .card-user {
    width: 300px;
    height: 250px;

    .card-header-user {
      display: flex;
      justify-content: space-between;
    }

    .card-body-user-info {
      display: flex;
      align-items: center;
    }
  }

  .overflow {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
