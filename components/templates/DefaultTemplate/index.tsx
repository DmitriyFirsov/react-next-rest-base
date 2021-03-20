import { FC } from 'react';
import Head from 'next/head';
import { Header } from './components';
import Logo from '../../atoms/Logo';

interface IDefaultTemplate {
  title?: string;
}

const Index: FC<IDefaultTemplate> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
      </Head>
      <Header>
        <Logo />
      </Header>
      {children}
    </div>
  );
};

export default Index;
