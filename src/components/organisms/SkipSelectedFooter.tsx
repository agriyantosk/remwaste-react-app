import type { Skip } from "../../types";
import PrimaryButton from "../atoms/PrimaryButton";

type Props = {
  skip: Skip | null;
};

const SelectedSkipFooter: React.FC<Props> = ({ skip }) => {
  const handleClick = () => {
    console.log(skip);
  };

  return (
    <div className="bottom-0 left-0 w-full bg-white border-t md:h-32 border-gray-200 shadow-sm z-50 flex justify-around items-center py-2 md:px-16 px-4">
      <div className="w-full">
        <p className="text-sm md:text-2xl font-medium text-gray-700 flex flex-grow items-center">
          Selected: {skip ? `${skip.size} Yard` : "-"}
        </p>
        <p className="text-sm md:text-2xl font-medium text-gray-700 flex flex-grow items-center">
          Price: {skip ? `£${skip.price_before_vat}` : "-"}
        </p>
      </div>
      <PrimaryButton
        style={
          "bg-blue-400 text-sm md:text-2xl text-white px-3 py-1.5 md:px-18 md:py-2.5 rounded-2xl items-center h-max"
        }
        onClick={handleClick}
        label="Continue"
      />
    </div>
  );
};

export default SelectedSkipFooter;
