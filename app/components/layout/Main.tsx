'use client';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="grow w-full py-24 xs:px-4 md:px-12">{children}</main>;
};

export default Main;
