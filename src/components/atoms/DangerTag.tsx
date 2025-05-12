import React from "react";
import { Tag } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import type { DangerTagKey } from "../../types";
import { dangerTagMap } from "../../mapping";

type Props = {
  data: Partial<Record<DangerTagKey, boolean>>;
};

const DangerTag: React.FC<Props> = ({ data }) => {
  return (
    <>
      {Object.entries(dangerTagMap).map(([key, label]) => {
        const value = data[key as DangerTagKey];
        if (value === undefined || value === false) return null;

        return (
          <Tag
            style={{ opacity: "85%" }}
            key={key}
            icon={<ExclamationCircleOutlined />}
            color="#EF4444"
          >
            {label}
          </Tag>
        );
      })}
    </>
  );
};

export default DangerTag;
