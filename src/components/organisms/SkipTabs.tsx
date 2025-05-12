import React, { useEffect, useState } from "react";
import { Tabs, Spin, Segmented } from "antd";
import { fetchSkips } from "../../api/skipServices";
import type { TabsProps } from "antd";
import type { EnrichedSkip } from "../../types";
import SkipDisplay from "../molecules/SkipDisplay";
import ARButton from "../atoms/ARButton";
import InformationTooltip from "../atoms/InformationTooltip";
import { isMobile } from "../../utils";

type Props = {
  onSelect: (skip: EnrichedSkip | null) => void;
};

const SkipTabs: React.FC<Props> = ({ onSelect }) => {
  const [skips, setSkips] = useState<EnrichedSkip[]>([]);
  const [selectedSkipData, setSelectedSkipData] = useState<EnrichedSkip | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchSkips();
        console.log(result[0], ">>>");
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
      label: tabContent,
    };
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Spin size="large" />
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
        <div className="flex justify-between">
          <Segmented
            className="w-max"
            shape="round"
            options={["metric", "imperial"]}
            value={unit}
            onChange={(val) => setUnit(val as "metric" | "imperial")}
          />
          <div className="flex">
            <ARButton />
            {isMobile() && (
              <InformationTooltip
                size={{ height: "0.75em", width: "0.75em" }}
                placement="bottom"
                content={
                  <div className="bg white flex flex-col text-center items-center">
                    <img
                      src="/usdz-512.webp"
                      alt="AR Help"
                      className="w-16 h-auto rounded shadow bg-white"
                    />
                    <p>
                      Press the top-right icon on the next page to start AR.
                    </p>
                  </div>
                }
              />
            )}
          </div>
        </div>
        <SkipDisplay unit={unit} skip={selectedSkipData} />
      </div>
    </>
  );
};

export default SkipTabs;
