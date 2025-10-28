import React from "react";

import { IconSvgProps } from "../types";

export const FlutterIcon: React.FC<IconSvgProps> = ({
  size = 17,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 32 32"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor">
        <path d="M19.083 0l-16.015 16 4.932 4.932 20.912-20.916h-9.808zM19.104 14.76l-8.631 8.609 8.631 8.631h9.828l-8.615-8.625 8.615-8.615z" />
      </g>
    </svg>
  );
};
