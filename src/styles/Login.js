import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 525px;
    height: 356px;
    background-color: white;
    box-shadow: -4px 9px 13px rgba(3, 107, 82, 0.3);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 330px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.darkBlue};
      color: ${({ theme }) => theme.darkBlue};
      border-radius: 5px;
      outline: none;
      font-size: 14px;
      padding: 0 15px;
    }

    input::placeholder {
      color: ${({ theme }) => theme.darkBlue};
    }

    button {
      width: 362px;
      height: 42px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.darkBlue};
      background-color: ${({ theme }) => theme.darkBlue};
      color: white;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;

      &:disabled {
        cursor: not-allowed;
        background-color: ${({ theme }) => theme.gray};
        border: 1px solid ${({ theme }) => theme.gray};
      }
    }
  }
`;

export default Container;
