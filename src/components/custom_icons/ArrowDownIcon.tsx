import React from "react";

const ArrowDownIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.0002 4H9.7802C11.9869 4 12.8935 5.56667 11.7869 7.48L10.8935 9.02L10.0002 10.56C8.89353 12.4733 7.08686 12.4733 5.9802 10.56L5.08686 9.02L4.19353 7.48C3.10686 5.56667 4.00686 4 6.2202 4H8.0002Z"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDownIcon;
