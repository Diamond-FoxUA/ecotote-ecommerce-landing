import { useDictionary } from "@/shared/context/DictionaryContext";

type NavListProps = {
  onClose?: () => void;
  className?: string;
};

export default function NavList({ onClose, className }: NavListProps) {
  const dict = useDictionary();
  const navDict = dict.navigation;

  const navItems = [
    {
      text: navDict.aboutUs,
      link: "features",
    },
    {
      text: navDict.products,
      link: "products",
    },
    {
      text: navDict.testimonials,
      link: "testimonials",
    },
    {
      text: navDict.contacts,
      link: "contacts",
    },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLButtonElement>,
    targetId: string,
  ) => {
    e.preventDefault();

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    if (onClose) onClose();
  };

  return (
    <ul
      className={`flex flex-col lg:flex-row gap-8 ${className ? className : ""}`}
    >
      {navItems.map((i) => (
        <li key={i.link}>
          <button
            type="button"
            onClick={(e) => handleScroll(e, i.link)}
            className="font-fira text-[1rem] leading-[160%] border-b border-transparent hover:border-foreground text-foreground active:text-green-accent active:border-green-accent pb-1 transition-all duration-300 cursor-pointer text-left w-full lg:w-auto outline-none"
          >
            {i.text}
          </button>
        </li>
      ))}
    </ul>
  );
}
