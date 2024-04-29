import React from "react";

const UserSearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24.5 24C30.0228 24 34.5 19.5228 34.5 14C34.5 8.47715 30.0228 4 24.5 4C18.9772 4 14.5 8.47715 14.5 14C14.5 19.5228 18.9772 24 24.5 24Z"
        stroke="#0294E2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.32031 44C7.32031 36.26 15.0204 30 24.5004 30"
        stroke="#0294E2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.9 42.8C40.4346 42.8 43.3 39.9346 43.3 36.4C43.3 32.8654 40.4346 30 36.9 30C33.3654 30 30.5 32.8654 30.5 36.4C30.5 39.9346 33.3654 42.8 36.9 42.8Z"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.5 44L42.5 42"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserSearchIcon;
