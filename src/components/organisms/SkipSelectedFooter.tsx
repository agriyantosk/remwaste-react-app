import { Modal } from "antd";
import type { Skip } from "../../types";
import PrimaryButton from "../atoms/PrimaryButton";
import { useState } from "react";

type Props = {
  skip: Skip | null;
};

const SelectedSkipFooter: React.FC<Props> = ({ skip }) => {
  const [openResponsive, setOpenResponsive] = useState(false);

  return (
    <div className="bottom-0 left-0 w-full bg-secondary border-t border-gray md:h-32 border-gray-200 shadow-sm z-50 flex justify-around items-center  py-2 md:px-16 px-4">
      <div className="w-full">
        <p className="text-sm md:text-2xl font-medium text-primary-dark flex flex-grow items-center">
          Selected: {skip ? `${skip.size} Yard` : "-"}
        </p>
        <p className="text-sm md:text-2xl font-medium text-primary-dark flex flex-grow items-center">
          Price: {skip ? `£${skip.price_before_vat}` : "-"}
        </p>
        <p className="text-[8px] md:text-sm text-primary-dark italic">
          (Price exclude VAT)
        </p>
      </div>
      <div>
        <PrimaryButton
          style={
            "bg-primary text-sm md:text-2xl text-primary-light px-3 py-1.5 md:px-18 md:py-2.5 rounded-2xl items-center h-max cursor-pointer hover:opacity-80 transition ease-in-out duration-300"
          }
          onClick={() => {
            Modal.confirm({
              title: "Skip Confirmation",
              content: `Are you sure you want to continue with the ${skip?.size} Yard  Skip?`,
              onOk: () => {
                setOpenResponsive(true);
              },
              footer: (_, { OkBtn, CancelBtn }) => (
                <>
                  <CancelBtn />
                  <OkBtn />
                </>
              ),
            });
          }}
          label="Continue"
        />
        <Modal
          title="You have confirmed your skip choice"
          centered
          open={openResponsive}
          onOk={() => setOpenResponsive(false)}
          onCancel={() => setOpenResponsive(false)}
          width={{
            xs: "90%",
            sm: "80%",
            md: "70%",
            lg: "60%",
            xl: "50%",
            xxl: "40%",
          }}
        >
          <div className="flex gap-2 items-center">
            <div className="w-[50%]">
              <img
                src="/4-yarder-skip.jpg"
                alt="Skip image"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="w-[50%]">
              {skip && (
                <ul className="text-sm text-gray-700">
                  <li>
                    <strong>Size:</strong> {skip.size} Yard
                  </li>
                  <li>
                    <strong>Hire Period:</strong> {skip.hire_period_days} days
                  </li>
                  <li>
                    <strong>Price (before VAT):</strong> £
                    {skip.price_before_vat}
                  </li>
                  <li>
                    <strong>VAT:</strong> {skip.vat}%
                  </li>
                  <li>
                    <strong>Postcode:</strong> {skip.postcode}
                  </li>
                  <li>
                    <strong>Area:</strong> {skip.area || "N/A"}
                  </li>
                  <li>
                    <strong>Allowed On Road:</strong>{" "}
                    {skip.allowed_on_road ? "Yes" : "No"}
                  </li>
                  <li>
                    <strong>Allows Heavy Waste:</strong>{" "}
                    {skip.allows_heavy_waste ? "Yes" : "No"}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default SelectedSkipFooter;
