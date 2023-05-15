import './globals.css';
import { Nunito } from 'next/font/google';

import ClientOnly from '@components/ClientOnly';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

const nunito = Nunito({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Header />
        </ClientOnly>
        {children}
        <ClientOnly>
          <Footer>© 2023 Gosh95. All Rights Reserved</Footer>
        </ClientOnly>
      </body>
    </html>
  );
};

export default RootLayout;
