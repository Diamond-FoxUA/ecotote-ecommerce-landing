import Link from "next/link";
import { ReactNode } from "react";

type LinkBtnProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function LinkBtn({ href, children, className }: LinkBtnProps) {
  const defaultStyles =
    "text-white text-[1rem] leading-[160%] flex justify-center items-center w-full max-w-98.25 p-3 bg-foreground rounded-[0.38rem] hover:bg-foreground/50 active:bg-btn-active/50 transition-colors duration-300 md:max-w-[148px]";
  const extraStyles = className;
  const styles = [defaultStyles, extraStyles].join(" ");

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
