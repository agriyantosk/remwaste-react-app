import React from "react";
import { Steps } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaShield } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";

const ProgressSteps: React.FC = () => (
  <Steps
    size="small"
    current={1}
    items={[
      {
        title: "Postcode",
        status: "finish",
        icon: <FaLocationDot />,
      },
      {
        title: "Waste Type",
        status: "finish",
        icon: <FaTrash />,
      },
      {
        title: "Select Skip",
        status: "finish",
        icon: <FaTruck />,
      },
      {
        title: "Permit Check",
        status: "finish",
        icon: <FaShield />,
      },
      {
        title: "Choose Date",
        status: "finish",
        icon: <FaRegCalendar />,
      },
      {
        title: "Payment",
        status: "finish",
        icon: <FaRegCreditCard />,
      },
    ]}
  />
);

export default ProgressSteps;
