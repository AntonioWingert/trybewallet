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
  z-index: -1;

  > thead {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 12px;
    color: white;
    border-bottom: 2px solid white;

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
`;

export const CC = styled.div``;
