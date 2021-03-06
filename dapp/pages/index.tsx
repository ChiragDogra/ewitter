import type { NextPage } from 'next';
import Head from 'next/head';
import Button from '../components/Button';
import useEwitter from '../hooks/useEwitter';

const Home = () => {
  const { connect, account } = useEwitter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Ewitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="mb-8 text-6xl font-bold">
          Welcome to <span className="text-blue-400">Ewitter</span>
        </h1>
        {!account ? (
          <Button label="Connect with ethereum" onClick={connect} />
        ) : <p className= "text-red-400">Connected to {account}</p>}
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        Powered by Ethereum
      </footer>
    </div>
  );
};

export default Home;
