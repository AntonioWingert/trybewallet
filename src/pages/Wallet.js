import React from 'react';
import Header from '../components/Header/Header';
import WalletForm from '../components/WalletForm/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
      </div>
    );
  }
}

export default Wallet;
