type LogoProps = {
  width: number;
  height: number;
};

export default function Logo({ width = 84, height = 36 }: LogoProps) {
  return (
    <svg
      className="fill-foreground"
      width={width}
      height={height}
      aria-label="Ecotote Logo"
    >
      <use href="/icons/sprite.svg#icon-logo"></use>
    </svg>
  );
}
