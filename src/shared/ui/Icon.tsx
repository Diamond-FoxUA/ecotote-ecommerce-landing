type IconProps = {
  className?: string;
  size?: number;
  iconName: string;
};

export default function Icon({ className, size = 24, iconName }: IconProps) {
  return (
    <svg className={className} width={size} height={size}>
      <use href={`/icons/sprite.svg#${iconName}`}></use>
    </svg>
  );
}
