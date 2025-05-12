import type React from "react";
import type { Skip } from "../../types";
import InformationTooltip from "../atoms/InformationTooltip";
import SkipInfoTable from "./SkipInfoTable";
import { Badge } from "antd";

type Props = {
  skip: Skip | null;
};

const SkipDisplay: React.FC<Props> = ({ skip }) => {
  if (!skip) return null;
  const imageUrl = `public/4-yarder-skip.jpg`;

  return (
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row flex-grow h-[80%] justify-start border border-gray-200 my-4">
      <div className="w-full flex justify-center">
        <img
          src={imageUrl}
          alt={`${skip.size} Yard Skip`}
          className="object-cover h-full"
        />
      </div>

      <Badge.Ribbon
        text={
          <p className="text-lg sm:text-3xl lg:text-5xl font-semibold">
            £{skip.price_before_vat}
          </p>
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
            <div className="hidden lg:block">
              <SkipInfoTable size={skip.size} />
            </div>
            <div>
              <p className="text-xs sm:text-lg font-semibold text-gray-700">
                Product Dimensions:
              </p>
              <p className="text-xs sm:text-lg text-gray-600">
                ← 7 ft — 5 m ⇵ 3 ft
              </p>
              {/* <p className="text-sm font-semibold text-gray-700">Recommended use</p>
          <p className="text-sm text-gray-600">Garden waste, soil, branches</p> */}
            </div>
          </div>
        </div>
      </Badge.Ribbon>
    </div>
  );
};

export default SkipDisplay;
