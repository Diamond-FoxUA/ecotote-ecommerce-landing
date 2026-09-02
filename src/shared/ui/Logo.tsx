import Link from "next/link";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <Link href="/" >
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
