interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  return (
    <div className="w-full h-8 flex items-center justify-center text-xs border-t border-t-neutral-300">{children}</div>
  );
};

export default Footer;
