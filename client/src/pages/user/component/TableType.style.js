import styled from "styled-components";

export const TableTypeContainer = styled.div`
  margin: 30px 5vw;

  .table-container {
    height: calc(100vh - 160px);
    display: block;
    overflow-y: auto;

    thead {
      position: sticky;
      top: -16px;
      z-index: 201;
    }
  }

  td {
    padding: 10px 0;
  }
`;
