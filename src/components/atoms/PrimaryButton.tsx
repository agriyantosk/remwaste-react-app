import React from "react";

type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  style: string;
};

const PrimaryButton: React.FC<Props> = ({
  label,
  onClick,
  disabled = false,
  style,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={style}>
      {label}
    </button>
  );
};

export default PrimaryButton;
