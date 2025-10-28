import React from "react";
import { IconSvgProps } from "../types";

export const CoffeeIcon: React.FC<IconSvgProps> = ({
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
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs id="defs6" />
      <path
        d="M 6.2109375,5.5097656 C 3.4857651,5.5097656 1.25,7.735132 1.25,10.470703 v 7.318359 C 1.25,20.51639 3.4836099,22.75 6.2109375,22.75 h 7.3691405 c 2.725173,0 4.958984,-2.225358 4.958984,-4.960938 v -7.318359 c 0,-2.7273192 -2.231656,-4.9609374 -4.958984,-4.9609374 z m 0,1.5 h 7.3691405 c 1.912673,0 3.458984,1.5482769 3.458984,3.4609374 v 7.318359 c 0,1.924421 -1.544156,3.460938 -3.458984,3.460938 H 6.2109375 C 4.2982651,21.25 2.75,19.701735 2.75,17.789062 v -7.318359 c 0,-1.9244087 1.5461099,-3.4609374 3.4609375,-3.4609374 z"
        fill="currentColor"
        id="path1"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 5.5,1.5 A 0.75,0.75 0 0 0 4.75,2.25 V 4 A 0.75,0.75 0 0 0 5.5,4.75 0.75,0.75 0 0 0 6.25,4 V 2.25 A 0.75,0.75 0 0 0 5.5,1.5 Z"
        fill="currentColor"
        id="path2"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 9.5,1.5 A 0.75,0.75 0 0 0 8.75,2.25 V 4 A 0.75,0.75 0 0 0 9.5,4.75 0.75,0.75 0 0 0 10.25,4 V 2.25 A 0.75,0.75 0 0 0 9.5,1.5 Z"
        fill="currentColor"
        id="path3"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 13.5,1.5 A 0.75,0.75 0 0 0 12.75,2.25 V 4 A 0.75,0.75 0 0 0 13.5,4.75 0.75,0.75 0 0 0 14.25,4 V 2.25 A 0.75,0.75 0 0 0 13.5,1.5 Z"
        fill="currentColor"
        id="path4"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m 17.789062,8.1992188 a 0.750075,0.750075 0 0 0 -0.75,0.75 v 8.4199222 a 0.750075,0.750075 0 0 0 0.75,0.75 c 2.727328,0 4.960938,-2.231657 4.960938,-4.958985 0,-2.735579 -2.235754,-4.9609372 -4.960938,-4.9609372 z m 0.75,1.6503906 C 20.079928,10.197923 21.25,11.503061 21.25,13.160156 c 0,1.64661 -1.171522,2.957683 -2.710938,3.308594 z"
        fill="currentColor"
        id="path5"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 2,11.25 A 0.75,0.75 0 0 0 1.25,12 0.75,0.75 0 0 0 2,12.75 h 15.509766 a 0.75,0.75 0 0 0 0.75,-0.75 0.75,0.75 0 0 0 -0.75,-0.75 z"
        fill="currentColor"
        id="path6"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
