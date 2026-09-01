"use client";
import Logo from "@/shared/ui/Logo";
import Link from "next/link";
import { useDictionary } from "@/shared/context/DictionaryContext";

export default function Navigation({ onClose }: { onClose?: () => void }) {
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

  const addressItems = [navDict.phone, navDict.email];

  return (
    <nav
      aria-label="Main Navigation"
      className="flex flex-col w-full lg:flex-row lg:items-center lg:justify-between gap-24 h-full"
    >
      <Link
        onClick={onClose}
        href="/"
        className="hidden lg:block hover:scale-110 active:scale-90 transition-transform duration-300"
      >
        <Logo width={106.51} height={45.65} />
      </Link>

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

      <address className="not-italic">
        <ul className="flex flex-col lg:flex-row gap-4">
          {addressItems.map((i) => (
            <li key={i}>
              <a
                onClick={onClose}
                href={`${i.startsWith("+") ? "tel:" : "mailto:"}${i}`}
                className="font-fira text-[1rem] leading-[160%] border-b border-transparent hover:border-foreground active:text-foreground/70 active:border-foreground/70 pb-1 transition-all duration-300"
              >
                {i}
              </a>
            </li>
          ))}
        </ul>
      </address>
    </nav>
  );
}
