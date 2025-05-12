import { useState } from "react";
import type { Skip } from "../types";
import ProgressSteps from "../components/molecules/ProgressSteps";
import SkipTabs from "../components/organisms/SkipTabs";
import SelectedSkipFooter from "../components/organisms/SkipSelectedFooter";

const SkipSelectionPage = () => {
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);

  return (
    <>
      <div className="min-h-screen flex flex-col pt-4">
        <ProgressSteps />
        <div className="flex-grow flex flex-col">
          <SkipTabs onSelect={setSelectedSkip} />
          <SelectedSkipFooter skip={selectedSkip} />
        </div>
      </div>
    </>
  );
};

export default SkipSelectionPage;
