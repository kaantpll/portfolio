import { Button } from "@nextui-org/react";
import React from "react";
import { IconType } from "react-icons";
interface IconButtonProps {
  text: string;
  icon: IconType;
  color: string;
}
const IconButton: React.FC<IconButtonProps> = ({ text, icon: Icon, color }) => {
  return (
    <div className="flex gap-4 items-center">
      <Button
        className={`bg-[${color}] rounded-md text-white`}
        startContent={<Icon size={20} color="white" />}
      >
        {text}
      </Button>
    </div>
  );
};

export default IconButton;
