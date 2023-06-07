interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div className="bg-white rounded-md shadow-md p-4">{children}</div>;
};

export default Box;
