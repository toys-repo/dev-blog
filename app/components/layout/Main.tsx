interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className="grow w-full pt-24 pb-8 xs:px-4 md:px-12 flex flex-col items-center">{children}</main>;
};

export default Main;
