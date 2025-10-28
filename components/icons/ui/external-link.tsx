import React from "react";

import { IconSvgProps } from "../types";

export const ExternalLinkIcon: React.FC<IconSvgProps> = ({
  size = 18,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      focusable="false"
      height={size || height}
      id="svg3"
      role="presentation"
      version="1.1"
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {" "}
      <defs id="defs3" />{" "}
      <path
        d="M 20.669922,2.2695313 12.46875,10.46875 a 0.75,0.75 0 0 0 0,1.0625 0.75,0.75 0 0 0 1.0625,0 l 8.199219,-8.2011719 a 0.75,0.75 0 0 0 0,-1.0605468 0.75,0.75 0 0 0 -1.060547,0 z"
        fill="currentColor"
        fillRule="evenodd"
        id="path1"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
      <path
        d="m 17.199219,1.25 a 0.75,0.75 0 0 0 -0.75,0.75 0.75,0.75 0 0 0 0.75,0.75 H 21.25 v 4.0507812 a 0.75,0.75 0 0 0 0.75,0.75 0.75,0.75 0 0 0 0.75,-0.75 V 2 A 0.750075,0.750075 0 0 0 22,1.25 Z"
        fill="currentColor"
        fillRule="evenodd"
        id="path2"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />{" "}
      <path
        d="M 9,1.25 C 6.4,1.25 4.4151686,1.7723314 3.09375,3.09375 1.7723314,4.4151686 1.25,6.4 1.25,9 v 6 c 0,2.6 0.5223314,4.584831 1.84375,5.90625 C 4.4151686,22.227669 6.4,22.75 9,22.75 h 6 c 2.6,0 4.584831,-0.522331 5.90625,-1.84375 C 22.227669,19.584831 22.75,17.6 22.75,15 V 13 A 0.75,0.75 0 0 0 22,12.25 0.75,0.75 0 0 0 21.25,13 v 2 c 0,2.4 -0.477669,3.915169 -1.40625,4.84375 C 18.915169,20.772331 17.4,21.25 15,21.25 H 9 C 6.6,21.25 5.0848314,20.772331 4.15625,19.84375 3.2276686,18.915169 2.75,17.4 2.75,15 V 9 C 2.75,6.6 3.2276686,5.0848314 4.15625,4.15625 5.0848314,3.2276686 6.6,2.75 9,2.75 h 2 A 0.75,0.75 0 0 0 11.75,2 0.75,0.75 0 0 0 11,1.25 Z"
        fill="currentColor"
        fillRule="evenodd"
        id="path3"
        opacity={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
