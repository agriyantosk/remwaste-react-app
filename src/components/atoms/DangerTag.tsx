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
        if (value === undefined || value === true) return null;

        return (
          <Tag key={key} icon={<ExclamationCircleOutlined />} color="error">
            {label}
          </Tag>
        );
      })}
    </>
  );
};

export default DangerTag;
