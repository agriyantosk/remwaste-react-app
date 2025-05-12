import React from "react";
import { skipDescriptions, skipRecommendations } from "../../constant";

type Props = {
  size: number;
};

const SkipInfoTable: React.FC<Props> = ({ size }) => {
  const description = skipDescriptions[size];
  const recommendations = skipRecommendations[size];

  return (
    <div className="text-sm space-y-2">
      {/* Description Row */}
      <div>
        <h4 className="font-semibold mb-1 text-xs sm:text-lg">Description:</h4>
        <p className="text-gray-700 text-xs sm:text-lg">{description}</p>
      </div>

      {/* Recommendations Row */}
      <div>
        <h4 className="font-semibold mb-1 text-xs sm:text-lg">Ideal for...</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-lg">
          {recommendations.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkipInfoTable;
