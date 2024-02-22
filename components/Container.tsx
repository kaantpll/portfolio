interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className=" 
  mx-auto 
  max-w-[980px]
  p-4
  md:px-10
"
    >
      {children}
    </div>
  );
};

export default Container;
