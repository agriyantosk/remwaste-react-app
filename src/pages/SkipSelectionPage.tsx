import { useState } from "react";
import ProgressSteps from "../components/molecules/ProgressSteps";
import SelectedSkipFooter from "../components/organisms/SkipSelectedFooter";
import SkipTabs from "../components/organisms/SkipTabs";
import type { Skip } from "../types";

const SkipSelectionPage = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <>
      <div className="h-screen">
        <div>
          <ProgressSteps />
          <SkipTabs onSelect={setSelectedSkip} />
          <SelectedSkipFooter skip={selectedSkip} />
        </div>
      </div>
    </>
  );
};

export default SkipSelectionPage;
