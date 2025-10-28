import React from "react";
import { IconSvgProps } from "../types";

export const ToggleIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      className="size-6"
      fill="none"
      height={size || height}
      stroke="currentColor"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.75 9h16.5m-16.5 6.75h16.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
