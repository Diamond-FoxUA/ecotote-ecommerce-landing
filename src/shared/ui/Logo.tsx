"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  const pathname = usePathname();
  const currentLocale = pathname.split("/") || "uk";

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Link
      href={`/${currentLocale}`}
      onClick={handleLogoClick}
    >
      <svg
        className={`fill-foreground ${className ? className : ""}`}
        width={84}
        height={36}
        aria-label="Ecotote Home"
      >
        <use href="/icons/sprite.svg#icon-logo"></use>
      </svg>
    </Link>
  );
}
