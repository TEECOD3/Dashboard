import React from "react";

const UserIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.0002 9.99984C12.3013 9.99984 14.1668 8.13436 14.1668 5.83317C14.1668 3.53198 12.3013 1.6665 10.0002 1.6665C7.69898 1.6665 5.8335 3.53198 5.8335 5.83317C5.8335 8.13436 7.69898 9.99984 10.0002 9.99984Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.1585 18.3333C17.1585 15.1083 13.9501 12.5 10.0001 12.5C6.05013 12.5 2.8418 15.1083 2.8418 18.3333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserIcon;
