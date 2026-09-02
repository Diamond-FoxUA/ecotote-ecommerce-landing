import AddressList from "./AddressList";
import Navigation from "./Navigation";

export default function MobileMenu({
  className,
  onClose,
}: {
  className: string;
  onClose: () => void;
}) {
  return (
    <div
      aria-label="Mobile Menu"
      className={`fixed z-40 top-17 flex flex-col gap-24 md:gap-16 w-full h-[92dvh] py-8 px-5 bg-green-bg ${className}`}
    >
      <Navigation onClose={onClose} />

      <AddressList />
    </div>
  );
}
