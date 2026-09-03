import { useDictionary } from "@/shared/context/DictionaryContext";
import Link from "next/link";

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
      link: "#features",
    },
    {
      text: navDict.products,
      link: "#products",
    },
    {
      text: navDict.testimonials,
      link: "#testimonials",
    },
    {
      text: navDict.contacts,
      link: "#contacts",
    },
  ];

  return (
    <ul
      className={`flex flex-col lg:flex-row gap-8 ${className ? className : ""}`}
    >
      {navItems.map((i) => (
        <li key={i.link}>
          <Link
            onClick={onClose}
            href={i.link}
            className="font-fira text-[1rem] leading-[160%] border-b border-transparent hover:border-foreground active:text-green-accent active:border-green-accent pb-1 transition-all duration-300"
          >
            {i.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
