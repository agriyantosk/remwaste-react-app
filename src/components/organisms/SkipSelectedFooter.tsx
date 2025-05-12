import type { Skip } from "../../types";

type Props = {
  skip: Skip | null;
};

const SelectedSkipFooter: React.FC<Props> = ({ skip }) => {
  if (!skip) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-sm z-50 px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
      <div className="text-sm sm:text-base font-medium text-gray-700">
        Selected: {skip.size} Yard — £{skip.price_before_vat}
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded-md w-full sm:w-auto">
        Continue
      </button>
    </div>
  );
};

export default SelectedSkipFooter;
