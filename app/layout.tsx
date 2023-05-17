import './globals.css';
import { Nunito } from 'next/font/google';

import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';
import Main from '@components/layout/Main';

const nunito = Nunito({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${nunito.className} w-full min-h-screen flex flex-col`}>
        <Header />
        <Main>{children}</Main>
        <Footer>© 2023 Gosh95. All Rights Reserved</Footer>
      </body>
    </html>
  );
};

export default RootLayout;
