import type React from "react";
import type { EnrichedSkip, MeasurementUnit } from "../../types";
import InformationTooltip from "../atoms/InformationTooltip";
import SkipInfoTable from "./SkipInfoTable";
import { Badge } from "antd";
import WarningTag from "../atoms/WarningTag";
import DangerTag from "../atoms/DangerTag";
import SkipCarousel from "./SkipCarousel";

type Props = {
  unit: MeasurementUnit;
  skip: EnrichedSkip | null;
};

const SkipDisplay: React.FC<Props> = ({ skip, unit }) => {
  if (!skip) return null;

  return (
    <>
      <div className="flex flex-grow flex-col lg:flex-row flex-grow justify-start border border-gray my-4">
        <div className="w-full lg:w-[55%] relative flex justify-center items-center">
          <div className="w-full h-full items-center justify-center">
            <SkipCarousel skip={skip} />
          </div>

          {(!skip.allowed_on_road || !skip.allows_heavy_waste) && (
            <div className="absolute bottom-2 left-2 flex flex-col gap-1 z-10">
              {!skip.allowed_on_road && (
                <WarningTag data={{ allowed_on_road: skip.allowed_on_road }} />
              )}
              {!skip.allows_heavy_waste && (
                <DangerTag
                  data={{ allows_heavy_waste: skip.allows_heavy_waste }}
                />
              )}
            </div>
          )}
        </div>

        <Badge.Ribbon
          color="#0037C1"
          text={
            <>
              <p className="text-lg sm:text-3xl lg:text-5xl font-semibold">
                £{skip.price_before_vat}
              </p>
            </>
          }
        >
          <div className="w-full flex flex-grow h-full justify-end gap-2 px-4 py-2 lg:py-8">
            <div className="w-full flex flex-col gap-2 lg:gap-4 justify-center">
              <div>
                <div className="flex gap-1">
                  <h2 className="text-lg sm:text-3xl font-bold text-secondary-dark">
                    {skip.size} Yard
                  </h2>{" "}
                  <div className="lg:hidden">
                    <InformationTooltip
                      placement="right"
                      size={{ height: "0.75em", width: "0.75em" }}
                      content={
                        <div className="max-w-xs">
                          <h4 className="font-semibold mb-1 text-primary-dark">
                            Ideal for...
                          </h4>
                          <ul className="list-disc list-inside space-y-1 text-sm text-primary-dark">
                            {skip.recommendations?.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      }
                    />
                  </div>
                </div>
                <p className="text-xs sm:text-lg text-gray">
                  {skip.hire_period_days} day hire period
                </p>
              </div>
              <div className="space-y-4">
                <div className="hidden lg:block">
                  <SkipInfoTable skip={skip} />
                </div>
                <div>
                  <p className="text-xs sm:text-lg font-semibold text-secondary-dark">
                    Product Dimensions:
                  </p>
                  <p className="text-xs sm:text-lg text-gray">
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
