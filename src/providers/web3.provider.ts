import Web3 from 'web3';
import { getProviderUrl } from '@/helpers/common';

declare let window: any;

class Web3Provider {
  getWeb3WithProvider(): any {
    const provider = getProviderUrl();
    try {
      if (window.ethereum) {
        return new Web3(provider);
      }
      if (window.web3) {
        return new Web3(provider);
      }
      console.log('You need to allow Metamask.');
      return null;
    } catch (error) {
      console.log('You need to allow Metamask.');
      throw error;
    }
  }

  getWeb3(): any {
    try {
      if (window.ethereum) {
        return new Web3(window.ethereum);
      }
      if (window.web3) {
        return new Web3(window.web3.currentProvider);
      }
      console.log('You need to allow Metamask.');
      return null;
    } catch (error) {
      console.log('You need to allow Metamask.');
      throw error;
    }
  }
}

export default new Web3Provider();