import { Link } from "@heroui/link";

import { LinkNavigation } from "@/types";
import { ArrowHorizontalIcon } from "@/components/icons";

interface NavigationLinks {
  left?: LinkNavigation;
  right?: LinkNavigation;
}

export const NavigationInPage = ({ left, right }: NavigationLinks) => {
  return (
    <div className="flex justify-between pt-10 pb-10">
      <div>
        {left && (
          <Link
            className="text-sm text-default-600 hover:text-primary transition font-bold cursor-pointer"
            href={left.href}
          >
            <ArrowHorizontalIcon className="rotate-180  inline-block mr-2" />
            {left.name}
          </Link>
        )}
      </div>
      <div>
        {right && (
          <Link
            className="text-sm text-default-600 font-bold transition hover:text-primary cursor-pointer"
            href={right.href}
            title={right.name}
          >
            {right.name}
            <ArrowHorizontalIcon className="inline-block ml-2" />
          </Link>
        )}
      </div>
    </div>
  );
};
