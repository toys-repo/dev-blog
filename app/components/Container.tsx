interface ContainerProps {
  maxWidth?: 'md' | 'lg';
  children: React.ReactNode;
}

const Container = ({ maxWidth, children }: ContainerProps) => {
  return (
    <div
      className={`w-full h-full 
      ${(!maxWidth || maxWidth === 'md') && 'max-w-screen-md'} 
      ${maxWidth === 'lg' && 'max-w-screen-lg'} 
      flex flex-col gap-6`}
    >
      {children}
    </div>
  );
};

export default Container;
