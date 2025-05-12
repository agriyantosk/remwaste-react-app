import React from "react";
import { Steps } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbLineDotted } from "react-icons/tb";

const ProgressSteps: React.FC = () => {
  const currentStep = 2;
  const steps = [
    { title: "Postcode", icon: <FaLocationDot /> },
    { title: "Waste Type", icon: <FaTrash /> },
    { title: "Select Skip", icon: <FaTruck /> },
    { title: "Permit Check", icon: <FaShield /> },
    { title: "Choose Date", icon: <FaRegCalendar /> },
    { title: "Payment", icon: <FaRegCreditCard /> },
  ];

  const mobileUnseenSteps = { title: "", icon: <TbLineDotted /> };

  const mobileSteps = [
    steps[0],
    mobileUnseenSteps,
    steps[currentStep],
    mobileUnseenSteps,
    steps[steps.length - 1],
  ];

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block md:w-[90%] mx-auto">
        <Steps
          size="small"
          current={currentStep}
          direction="horizontal"
          responsive={false}
          items={steps.map((step) => ({
            title: step.title,
            icon: step.icon,
          }))}
        />
      </div>

      {/* Mobile */}
      <div className="md:hidden px-4">
        <Steps
          size="small"
          current={currentStep}
          direction="horizontal"
          responsive={false}
          items={mobileSteps.map((step) => ({
            icon: step.icon,
          }))}
        />
        <div className="text-center text-xs sm:text-lg font-medium text-gray-800">
          {steps[currentStep].title}
        </div>
      </div>
    </>
  );
};

export default ProgressSteps;
