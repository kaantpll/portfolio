import { IconType } from "react-icons";

interface ContainerProps {
  icon: IconType;
  text: string;
}
const IconBox: React.FC<ContainerProps> = ({ text, icon: Icon }) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Icon size={20} />
      <div className="text-md text-white hover:cursor-pointer hover:underline">
        {text}
      </div>
    </div>
  );
};

export default IconBox;
