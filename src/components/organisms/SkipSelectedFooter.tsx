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
    <div className="bottom-0 left-0 w-full bg-secondary border-t border-gray md:h-32 border-gray-200 shadow-sm z-50 flex justify-around items-center  py-2 md:px-16 px-4">
      <div className="w-full">
        <p className="text-sm md:text-2xl font-medium text-primary-dark flex flex-grow items-center">
          Selected: {skip ? `${skip.size} Yard` : "-"}
        </p>
        <p className="text-sm md:text-2xl font-medium text-primary-dark flex flex-grow items-center">
          Price: {skip ? `£${skip.price_before_vat}` : "-"}
        </p>
        <p className="text-[8px] md:text-sm text-primary-dark italic">(Price exclude VAT)</p>
      </div>
      <div>
        <PrimaryButton
          style={
            "bg-primary text-sm md:text-2xl text-primary-light px-3 py-1.5 md:px-18 md:py-2.5 rounded-2xl items-center h-max"
          }
          onClick={handleClick}
          label="Continue"
        />
      </div>
    </div>
  );
};

export default SelectedSkipFooter;
