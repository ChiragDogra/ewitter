import Ewitter from './Ewitter.json';
import {ethers} from 'ethers';
import { useState, useEffect } from 'react';
const ContractABI = Ewitter.abi;
const ContractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const Ethereum = typeof window !== 'undefined' && (window as any).ethereum;

const [contract,setContract]=useState(null)

const getEwitterContract = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum as any);
  const signer = provider.getSigner();
  const EwitterContract = new ethers.Contract(
    ContractAddress,
    ContractABI,
    signer
  );
   setContract(EwitterContract)
  return EwitterContract;
};

const useEwitter = () => {
  const Ewitter = getEwitterContract();
  const [currentAccount, setCurrentAccount] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<string>('');

  const connect = async () => {
    try {
      if (!Ethereum) {
        alert('Please install MetaMask');
        return;
      }
      const accounts = await Ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (accounts.length === 0) {
        alert('Please unlock MetaMask');
        return;
      }
      const account = accounts[0];
      console.log('connected to account: ', account);
      setCurrentAccount(account);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    if (!Ethereum) {
      console.log('No ethereum wallet found, please install metamask');
      return;
    }
    connect();
  }, []);

  useEffect(() => {
    if (currentAccount) {
      getUser();
    }
  }, [currentAccount]);

  const getUser = async () => {
    const contract = getEwitterContract();
    const user = await contract.getUser(currentAccount);
    const { avatar, bio, name, username, wallet } = user;
    console.log(user);
    return user;
  };

  return { connect, account: currentAccount };
};

export default useEwitter;
