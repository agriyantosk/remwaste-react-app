import React from "react";
import { Tooltip } from "antd";
import { AiOutlineInfoCircle } from "react-icons/ai";
import type { EnrichedSkip } from "../../types";

type Props = {
  size: {
    height: string;
    width: string;
  };
  skip: EnrichedSkip;
};

const InformationTooltip: React.FC<Props> = ({ size, skip }) => {
  return (
    <Tooltip
      placement="right"
      trigger="hover"
      title={
        <div className="max-w-xs">
          <h4 className="font-semibold mb-1">Ideal for...</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {skip.recommendations?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      }
    >
      <span>
        <AiOutlineInfoCircle
          style={{ height: size.height, width: size.width }}
        />
      </span>
    </Tooltip>
  );
};

export default InformationTooltip;
