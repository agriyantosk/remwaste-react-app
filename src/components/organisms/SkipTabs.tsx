// import React, { useState } from "react";
// import type { RadioChangeEvent } from "antd";
import { Tabs, Badge } from "antd";
import type { TabsProps } from "antd";
import InformationTooltip from "../atoms/InformationTooltip";
import SkipDisplay from "../molecules/SkipDisplay";
import React, { useState } from "react";
import type { Skip } from "../../types";

type Props = {
  onSelect: (skip: Skip | null) => void;
};

const data = [
  {
    id: 17933,
    size: 4,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 278,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.813",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17934,
    size: 6,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 305,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:52.992",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17935,
    size: 8,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 375,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.171",
    allowed_on_road: true,
    allows_heavy_waste: true,
  },
  {
    id: 17936,
    size: 10,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 400,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.339",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17937,
    size: 12,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 439,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.516",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17938,
    size: 14,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 470,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.69",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 17939,
    size: 16,
    hire_period_days: 14,
    transport_cost: null,
    per_tonne_cost: null,
    price_before_vat: 496,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:46.897146",
    updated_at: "2025-04-07T13:16:53.876",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
  {
    id: 15124,
    size: 20,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.434",
    allowed_on_road: false,
    allows_heavy_waste: true,
  },
  {
    id: 15125,
    size: 40,
    hire_period_days: 14,
    transport_cost: 248,
    per_tonne_cost: 248,
    price_before_vat: 992,
    vat: 20,
    postcode: "NR32",
    area: "",
    forbidden: false,
    created_at: "2025-04-03T13:51:40.344435",
    updated_at: "2025-04-07T13:16:52.603",
    allowed_on_road: false,
    allows_heavy_waste: false,
  },
];

const SkipTabs: React.FC<Props> = ({ onSelect }) => {
  const [selectedSkipData, setSelectedSkipData] = useState<Skip | null>(
    data[0]
  );

  const handleSkipSelection = (key: string) => {
    const selected = data.find((item) => String(item.id) === key);
    onSelect(selected ?? null);
    setSelectedSkipData(selected ?? null);
  };

  const items: TabsProps["items"] = data.map((skip, i) => ({
    key: String(skip.id),
    label: (
      <div className="flex flex-col items-center">
        {i === 0 ? (
          <Badge.Ribbon text="Recommended">
            <span>{skip.size} Yard</span>
          </Badge.Ribbon>
        ) : (
          <span>{skip.size} Yard</span>
        )}
      </div>
    ),
    children: <SkipDisplay skip={selectedSkipData} />,
  }));

  return (
    <>
      <Tabs
        onChange={handleSkipSelection}
        defaultActiveKey={String(data[0].id)}
        tabPosition="top"
        items={items}
        style={{ maxWidth: "100%" }}
      />
      <InformationTooltip />
    </>
  );
};

export default SkipTabs;
