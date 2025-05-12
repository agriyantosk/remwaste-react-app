import React, { useEffect, useState } from "react";
import { Tabs, Badge, Spin, Segmented } from "antd";
import { FaThumbsUp } from "react-icons/fa6";
import { fetchSkips } from "../../api/skipServices";
import type { TabsProps } from "antd";
import type { Skip } from "../../types";
import SkipDisplay from "../molecules/SkipDisplay";

type Props = {
  onSelect: (skip: Skip | null) => void;
};

const SkipTabs: React.FC<Props> = ({ onSelect }) => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [selectedSkipData, setSelectedSkipData] = useState<Skip | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSkips();
        setSkips(result);
        setSelectedSkipData(result[0]);
        onSelect(result[0]);
      } catch (error) {
        console.error("Failed to fetch skips:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onSelect]);

  const handleSkipSelection = (key: string) => {
    const selected = skips.find((item) => String(item.id) === key);
    onSelect(selected ?? null);
    setSelectedSkipData(selected ?? null);
  };

  const items: TabsProps["items"] = skips.map((skip) => {
    const tabContent = (
      <div className="flex flex-col items-center min-w-[60px] text-center">
        <span>{`${skip.size} Yard`}</span>
      </div>
    );

    return {
      key: String(skip.id),
      label:
        skip.size === 4 ? (
          <Badge count={<FaThumbsUp className="text-red-500" />}>
            {tabContent}
          </Badge>
        ) : (
          tabContent
        ),
    };
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Spin size="large" tip="Loading skip options..." />
      </div>
    );
  }

  return (
    <>
      <Tabs
        onChange={handleSkipSelection}
        defaultActiveKey={selectedSkipData ? String(selectedSkipData.id) : ""}
        tabPosition="top"
        items={items}
        centered
      />
      <div className="w-[90%] mx-auto flex flex-grow h-[80%] flex-col py-4">
        <Segmented
          className="w-max"
          shape="round"
          options={["metric", "imperial"]}
          value={unit}
          onChange={(val) => setUnit(val as "metric" | "imperial")}
        />
        <SkipDisplay unit={unit} skip={selectedSkipData} />
      </div>
    </>
  );
};

export default SkipTabs;
