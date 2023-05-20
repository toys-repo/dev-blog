interface MessageBoxProps {
  message: string;
}

const MessageBox = ({ message }: MessageBoxProps) => {
  return (
    <div className="w-full h-full flex items-center justify-center font-semibold xs:text-sm md:text-base">
      {message}
    </div>
  );
};

export default MessageBox;
