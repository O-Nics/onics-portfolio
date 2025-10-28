import React from "react";
import Link from "next/link";
import Image from "next/image";

import FadeHorizontal from "@/components/animation/fade-horizontal";

interface DesktopLogoProps {
  shouldAnimate: boolean;
}

export const DesktopLogo: React.FC<DesktopLogoProps> = ({ shouldAnimate }) => {
  return (
    <FadeHorizontal className="hidden md:flex" shouldAnimate={shouldAnimate}>
      <Link className="flex justify-start items-center" href="/">
        <Image
          priority
          alt="Nicolas Planche"
          className="rounded-full"
          height={45}
          quality={90}
          src="/61987116.jpeg"
          width={45}
        />
        <p className="pl-2 font-bold text-inherit">Nicolas Planche</p>
      </Link>
    </FadeHorizontal>
  );
};
