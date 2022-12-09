import styled from 'styled-components';

export const Container = styled.table`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  width: 1155px;
  height: 464px;
  background-color: ${({ theme }) => theme.darkBlue};
  box-shadow: -4px 9px 13px rgba(3, 107, 82, 0.3);
  border-radius: 10px;
  position: absolute;
  left: 63px;
  top: 156px;
  z-index: 2;

  > thead {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    color: white;
    border-bottom: 2px solid white;
    top: 235px;
    position: absolute;

    > tr {
      gap: 2rem;
      margin: 7.5px;

      th {
        border-left: 1px solid white;
        width: 110px;
        height: 26.6px;
      }

      > th:first-child {
        border: none;
      }
    }
  }

  > tbody {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    color: ${({ theme }) => theme.lightGreen};

    > tr {
      margin: 7.5px;
      border-bottom: 1px solid ${({ theme }) => theme.lightGreen};

      td {
        width: 110px;
        height: 26.6px;

        button {
          cursor: pointer;
          background: none;
          border: none;
        }
      }
    }
  }

  .edit {
    color: ${({ theme }) => theme.lightGreen}
  }

  .delete {
    color: #DF3C6D;
  }
`;

export const CC = styled.div``;
