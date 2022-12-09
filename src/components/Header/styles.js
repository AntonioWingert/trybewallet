import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: -4px 9px 13px rgba(5, 18, 54, 0.4);
  border-radius: 10px;
  position: absolute;
  width: 64.8125rem;
  height: 30.125rem;
  left: 7.5625rem;
  top: -6.0625rem;
  z-index: 3;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin-top: -150px;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
  }
`;

export const ContainerDespesas = styled.div`
  color: ${({ theme }) => theme.darkBlue};

  > svg {
    width: 29px;
    height: 29px;
  }

  > p {
    font-size: 14px;
    font-weight: 700;
   
    > span {
    font-weight: 400;
    }
  } 
`;

export const ContainerUser = styled.div`
color: ${({ theme }) => theme.lightGreen};

> svg {
  width: 26px;
  height: 26px;
}

> p {
  font-size: 14px;
  font-weight: 600;
} 
`;
