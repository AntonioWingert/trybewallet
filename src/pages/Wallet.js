import React from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';
import WalletForm from '../components/WalletForm/WalletForm';
import Container from '../styles/Wallet';

class Wallet extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <WalletForm />
        <Table />
      </Container>
    );
  }
}

export default Wallet;
