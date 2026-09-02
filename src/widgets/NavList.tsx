import { useDictionary } from "@/shared/context/DictionaryContext";
import Link from "next/link";

type NavListProps = {
  onClose?: () => void;
};

export default function NavList({ onClose }: NavListProps) {
  const dict = useDictionary();
  const navDict = dict.navigation;

  const navItems = [
    {
      text: navDict.aboutUs,
      link: "#about",
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
    <ul className="flex flex-col lg:flex-row gap-8">
      {navItems.map((i) => (
        <li key={i.link}>
          <Link
            onClick={onClose}
            href={i.link}
            className="font-fira text-[1rem] leading-[160%] border-b border-transparent hover:border-foreground active:text-foreground/70 active:border-foreground/70 pb-1 transition-all duration-300"
          >
            {i.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}
