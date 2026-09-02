import Icon from "@/shared/ui/Icon";

type BurgerBtn = {
  isOpen: boolean;
  setIsOpen: () => void;
};

export default function BurgerBtn({ isOpen, setIsOpen }: BurgerBtn) {
  return (
    <button
      type="button"
      onClick={setIsOpen}
      className="lg:hidden active:scale-70 transition-transform duration-300"
    >
      <Icon
        iconName={`icon-${isOpen ? "close" : "menu"}`}
        size={32}
        className={`${isOpen ? "scale-140 active:scale-130 transition-transform duration-300" : ""}`}
      />
    </button>
  );
}
