import React from "react";
import { Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { warningTagMap } from "../../mapping";
import type { WarningTagKey } from "../../types";

type Props = {
  data: Partial<Record<WarningTagKey, boolean>>;
};

const WarningTag: React.FC<Props> = ({ data }) => {
  return (
    <>
      {Object.entries(warningTagMap).map(([key, label]) => {
        const value = data[key as WarningTagKey];
        if (value === undefined || value === false) return null;

        return (
          <Tag
            style={{ opacity: "75%" }}
            key={key}
            icon={<ExclamationCircleOutlined />}
            color="#EAB308"
          >
            {label}
          </Tag>
        );
      })}
    </>
  );
};

export default WarningTag;
