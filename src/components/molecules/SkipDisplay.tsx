import type React from "react";
import type { EnrichedSkip, MeasurementUnit } from "../../types";
import InformationTooltip from "../atoms/InformationTooltip";
import SkipInfoTable from "./SkipInfoTable";
import { Badge } from "antd";
import WarningTag from "../atoms/WarningTag";
import DangerTag from "../atoms/DangerTag";
import { useEffect } from "react";

type Props = {
  unit: MeasurementUnit;
  skip: EnrichedSkip | null;
};

const SkipDisplay: React.FC<Props> = ({ skip, unit }) => {
  if (!skip) return null;
  const imageUrl = `/4-yarder-skip.jpg`;

  useEffect(() => {
    console.log(skip, "skip");
  }, [skip]);

  return (
    <>
      <div className="flex flex-grow flex-col lg:flex-row flex-grow justify-start border border-gray-200 my-4">
        <div className="w-full relative flex justify-center">
          <img
            src={imageUrl}
            alt={`${skip.size} Yard Skip`}
            className="object-cover"
          />

          {(skip.allowed_on_road || skip.allows_heavy_waste) && (
            <div className="absolute bottom-2 left-2 flex flex-col">
              {skip.allowed_on_road && (
                <WarningTag data={{ allowed_on_road: skip.allowed_on_road }} />
              )}
              {skip.allows_heavy_waste && (
                <DangerTag
                  data={{ allows_heavy_waste: skip.allows_heavy_waste }}
                />
              )}
            </div>
          )}
        </div>

        <Badge.Ribbon
          text={
            <>
              <p className="text-lg sm:text-3xl lg:text-5xl font-semibold">
                £{skip.price_before_vat}
              </p>
            </>
          }
        >
          <div className="w-full flex flex-grow h-full justify-end gap-2 px-4 py-2 lg:py-8">
            <div className="w-full flex flex-col gap-2 justify-center">
              <div>
                <div className="flex">
                  <h2 className="text-lg sm:text-3xl font-bold">
                    {skip.size} Yard
                  </h2>{" "}
                  <div className="lg:hidden">
                    <InformationTooltip
                      size={{ height: "0.75em", width: "0.75em" }}
                      content={skip}
                    />
                  </div>
                </div>
                <p className="text-xs sm:text-lg text-gray-500">
                  {skip.hire_period_days} day hire period
                </p>
              </div>
              <div className="space-y-2">
                <div className="hidden lg:block">
                  <SkipInfoTable skip={skip} />
                </div>
                <div>
                  <p className="text-xs sm:text-lg font-semibold text-gray-700">
                    Product Dimensions:
                  </p>
                  <p className="text-xs sm:text-lg text-gray-600">
                    (L){skip.dimensions.length[unit]} x (W)
                    {skip.dimensions.width[unit]} x (H)
                    {skip.dimensions.height[unit]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Badge.Ribbon>
      </div>
    </>
  );
};

export default SkipDisplay;
