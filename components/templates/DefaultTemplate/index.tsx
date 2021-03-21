import { FC } from 'react';
import Head from 'next/head';
import { Header } from './components';
import Logo from '../../atoms/Logo';
import Link from 'next/link';

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
        <Link href="/" passHref>
          <a>
            <Logo />
          </a>
        </Link>
      </Header>
      {children}
    </div>
  );
};

export default Index;
