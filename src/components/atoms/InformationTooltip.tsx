import React, { type ReactElement } from "react";
import { Tooltip } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import type { TooltipPlacement } from "antd/es/tooltip";

type Props = {
  size: {
    height: string;
    width: string;
  };
  content: ReactElement;
  placement: TooltipPlacement;
};

const InformationTooltip: React.FC<Props> = ({ size, content, placement }) => {
  return (
    <Tooltip
      placement={placement}
      trigger="hover"
      title={content}
      color="#E5E7EB"
      style={{ opacity: "80%" }}
    >
      <span>
        <AiOutlineInfoCircle
          className="text-primary-gray"
          style={{ height: size.height, width: size.width }}
        />
      </span>
    </Tooltip>
  );
};

export default InformationTooltip;
