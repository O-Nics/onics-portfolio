import React from "react";
import { IconSvgProps } from "../types";

export const ArrowHorizontalLineIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      height={size || height}
      id="svg2"
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m 13.900391,5.4003906 a 0.75,0.75 0 0 0 0,1.0605469 L 19.439453,12 13.900391,17.539062 a 0.75,0.75 0 0 0 0,1.060547 0.75,0.75 0 0 0 1.060547,0 L 21.03125,12.53125 a 0.750075,0.750075 0 0 0 0,-1.060547 L 14.960938,5.4003906 a 0.75,0.75 0 0 0 -1.060547,0 z"
        fill="currentColor"
        id="path1"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 3.5,11.25 A 0.75,0.75 0 0 0 2.75,12 0.75,0.75 0 0 0 3.5,12.75 h 16.830078 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z"
        fill="currentColor"
        id="path2"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
