import React from "react";
import { IconSvgProps } from "../types";

export const ArrowHorizontalIcon: React.FC<IconSvgProps> = ({
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
        d="m 8.9101563,3.3300781 a 0.75,0.75 0 0 0 -0.53125,0.21875 0.75,0.75 0 0 0 0,1.0605469 l 6.5214847,6.521484 c 0.480729,0.480729 0.480729,1.257553 0,1.738282 l -6.5214847,6.521484 a 0.75,0.75 0 0 0 0,1.060547 0.75,0.75 0 0 0 1.0605468,0 l 6.5214849,-6.521484 c 1.05927,-1.059271 1.05927,-2.800105 0,-3.859375 L 9.4394531,3.5488281 a 0.75,0.75 0 0 0 -0.5292968,-0.21875 z"
        fill="currentColor"
        id="path1"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
