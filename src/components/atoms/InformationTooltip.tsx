import React from "react";
import { Tooltip } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";

const InformationTooltip: React.FC = () => {
  return (
    <>
      <Tooltip title="Product Information.">
        <span>
          <AiOutlineInfoCircle />
        </span>
      </Tooltip>
    </>
  );
};

export default InformationTooltip;
