import type React from "react";
import type { Skip } from "../../types";

type Props = {
  skip: Skip | null;
};

const SkipDisplay: React.FC<Props> = ({ skip }) => {
  return (
    <>
      <div>{JSON.stringify(skip)}</div>
    </>
  );
};

export default SkipDisplay;
