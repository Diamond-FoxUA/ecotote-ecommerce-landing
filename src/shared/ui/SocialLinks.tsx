"use client";

import Icon from "@/shared/ui/Icon";
import Link from "next/link";

import { useDictionary } from "../context/DictionaryContext";

type SocialLinksProps = {
  className?: string;
};

export default function SocialLinks({ className }: SocialLinksProps) {
  const dict = useDictionary();

  const socialLinks = [
    {
      id: 1,
      text: "instagram",
      link: "",
    },
    {
      id: 2,
      text: "linkedIn",
      link: "",
    },
    {
      id: 3,
      text: "youtube",
      link: "",
    },
  ];

  return (
    <ul className="flex gap-3 justify-center items-center">
      {socialLinks.map((l) => (
        <li
          key={l.id}
          className="hover:scale-120 active:scale-90 transition-transform duration-300"
        >
          <Link href={l.link} aria-label={`${dict.common.socialMsg} ${l.text}`}>
            <Icon
              aria-hidden="true"
              iconName={`icon-${l.text}`}
              size={32}
              className={className ? className : ""}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
