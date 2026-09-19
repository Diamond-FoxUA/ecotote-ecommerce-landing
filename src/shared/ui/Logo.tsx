"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDictionary } from "../context/DictionaryContext";

type LogoProps = {
  className?: string;
  onClick?: () => void;
};

export default function Logo({ className, onClick }: LogoProps) {
  const dict = useDictionary();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "uk";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={`/${currentLocale}`}
      onClick={handleLogoClick}
      role="button"
      aria-label={dict.common.logoLabel}
      className="block focus-visible:outline-2 focus-visible:outline-green-600 rounded-sm"
    >
      <svg
        className={`fill-foreground ${className ? className : ""}`}
        width={84}
        height={36}
        aria-hidden="true"
      >
        <use href="/icons/sprite.svg#icon-logo"></use>
      </svg>
    </Link>
  );
}
