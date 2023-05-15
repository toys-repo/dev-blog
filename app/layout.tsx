import './globals.css';
import { Nunito } from 'next/font/google';

import ClientOnly from '@components/ClientOnly';
import Header from '@components/layout/Header';

const nunito = Nunito({ subsets: ['latin'] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ClientOnly>
          <Header />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
