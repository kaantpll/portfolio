import { Tooltip } from "@nextui-org/react";
import React from "react";
import AWSIcon from "./icons/AwsIcon";

interface IconToolTip {
  content: string;
  icon: any;
}
const IconTooltip: React.FC<IconToolTip> = ({ icon, content }) => {
  return (
    <Tooltip content={content} className="bg-gray-700">
      <div className="bg-gray-700 p-2 rounded-3xl hover:opacity-80 hover:cursor-pointer">
        {icon}
      </div>
    </Tooltip>
  );
};

export default IconTooltip;
