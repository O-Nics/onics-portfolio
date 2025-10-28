import { Link } from "@heroui/link";

import { LinkNavigation } from "@/types";
import { ArrowHorizontalIcon } from "@/components/icons";

interface NavigationLinks {
  leftLink?: LinkNavigation;
  rightLink?: LinkNavigation;
}

export default function NavigationInPage({
  leftLink,
  rightLink,
}: NavigationLinks) {
  return (
    <div className="flex justify-between pt-10 pb-10 items-center">
      <div>
        {leftLink && (
          <Link
            className="text-sm text-default-600 hover:text-primary transition font-bold cursor-pointer"
            href={leftLink.href}
          >
            <ArrowHorizontalIcon className="rotate-180  inline-block mr-2" />
            {leftLink.name}
          </Link>
        )}
      </div>

      <div>
        {rightLink && (
          <Link
            className="text-sm text-default-600 font-bold transition text-primary cursor-pointer"
            href={rightLink.href}
            title={rightLink.name}
          >
            {rightLink.name}
            <ArrowHorizontalIcon className="inline-block ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
}
