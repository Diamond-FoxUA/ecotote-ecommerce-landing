import NavList from "./NavList";

type NavigationProps = {
  onClose?: () => void;
  className?: string;
};

export default function Navigation({ onClose, className }: NavigationProps) {
  return (
    <nav aria-label="Main Navigation" className={className ? className : ""}>
      <NavList onClose={onClose} />
    </nav>
  );
}
