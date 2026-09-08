import { ComponentPropsWithoutRef } from "react";

type ActionBtnProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  className?: string;
};

export default function ActionBtn({
  variant = "primary",
  className,
  children,
  ...props
}: ActionBtnProps) {
  const defaultStyles =
    "text-[1rem] leading-[160%] flex justify-center items-center w-full p-3 rounded-[0.38rem] transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed";
  const primaryStyles =
    "text-white bg-foreground max-w-98.25 md:max-w-[148px] hover:bg-foreground/50 active:bg-btn-active/50 disabled:bg-foreground/20";
  const secondaryStyles =
    "text-foreground max-w-[320px] border border-foreground bg-transparent py-[7px] hover:text-foreground/50 hover:border-foreground/50 active:text-btn-active/60 active:border-btn-active/60 disabled:text-foreground/20 disabled:border-foreground/20";
  const extraStyles = className;
  const btnStyles = [
    defaultStyles,
    variant === "primary" ? primaryStyles : secondaryStyles,
    extraStyles,
  ].join(" ");

  return (
    <button {...props} className={btnStyles}>
      {children}
    </button>
  );
}
