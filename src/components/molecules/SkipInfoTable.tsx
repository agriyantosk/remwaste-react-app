import React from "react";
import type { EnrichedSkip } from "../../types";

type Props = {
  skip: EnrichedSkip | null;
};

const SkipInfoTable: React.FC<Props> = ({ skip }) => {
  return (
    <div className="text-sm space-y-2">
      {/* Description Row */}
      <div>
        <h4 className="font-semibold mb-1 text-xs sm:text-lg">Description:</h4>
        <p className="text-gray-700 text-xs sm:text-lg">{skip?.description}</p>
      </div>

      {/* Recommendations Row */}
      <div>
        <h4 className="font-semibold mb-1 text-xs sm:text-lg">Ideal for...</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-700 text-xs sm:text-lg">
          {skip?.recommendations.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkipInfoTable;
