import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 1037px;
  height: 134px;
  left: 121px;
  top: 156px;
  background: rgba(225, 229, 235, 0.49);
  border-radius: 0px;
  z-index: 4;
`;

export const DescriptionContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.darkBlue};
  font-size: 14px;
  font-weight: 700;
  margin-top: 23px;

  input {
    margin-left: 15px;
    color: ${({ theme }) => theme.darkBlue};
    border: 1px solid ${({ theme }) => theme.darkBlue};
    width: 289px;
    height: 30px;
    background: rgba(225, 229, 235, 0.49);
    border-radius: 5px;
    outline: none;
  }

  select {
    margin-left: 15px;
    border: 1px solid ${({ theme }) => theme.darkBlue};
    width: 155px;
    height: 30px;
    background: rgba(225, 229, 235, 0.49);
    border-radius: 5px;
    outline: none;
    color: ${({ theme }) => theme.darkBlue};
  }
`;

export const PaymentContainer = styled.div`
  width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.darkBlue};
  font-size: 14px;
  font-weight: 700;


  input {
    margin-left: 10px;
    color: ${({ theme }) => theme.darkBlue};
    border: 1px solid ${({ theme }) => theme.darkBlue};
    width: 158px;
    height: 30px;
    background: rgba(225, 229, 235, 0.49);
    border-radius: 5px;
    outline: none;
  }

  select {
    margin-left: 15px;
    border: 1px solid ${({ theme }) => theme.darkBlue};
    width: 228px;
    height: 30px;
    background: rgba(225, 229, 235, 0.49);
    border-radius: 5px;
    outline: none;
    color: ${({ theme }) => theme.darkBlue};
  }

  .currency {
    margin-left: 15px;
    border: 1px solid ${({ theme }) => theme.darkBlue};
    width: 91px;
    height: 30px;
    background: rgba(225, 229, 235, 0.49);
    border-radius: 5px;
    outline: none;
    color: ${({ theme }) => theme.darkBlue};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  width: 100%;

  > button {
    width: 330px;
    height: 40px;
    background: ${({ theme }) => theme.lightGreen};
    border: none;
    color: white;
    box-shadow: -4px 9px 13px rgba(5, 18, 54, 0.4);
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
  }
`;
