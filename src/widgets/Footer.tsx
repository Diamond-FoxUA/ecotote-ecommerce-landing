"use client";
import Logo from "@/shared/ui/Logo";
import NavList from "./NavList";
import SocialLinks from "./SocialLinks";
import AddressList from "./AddressList";

import { useDictionary } from "@/shared/context/DictionaryContext";

export default function Footer() {
  const dict = useDictionary();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center gap-6 lg:gap-13 bg-green-bg px-5 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      <div className="text-center flex flex-col w-full lg:flex-row justify-center lg:justify-between gap-12 md:gap-8 items-center">
        <Logo className="w-70 h-30.25 md:w-41 md:h-17.5" />
        <NavList className="md:flex-row pr-16" />
        <SocialLinks className="md:w-10 md:h-10 lg:w-6 lg:h-6" />
      </div>

      <div className="flex flex-col items-center w-full gap-6 md:gap-4 text-center border-t border-[#030a0626] pt-4 pb-4">
        <AddressList className="md:flex-row md:gap-8"/>
        <p className="text-[0.88rem] leading-[160%]">
          &copy; {currentYear} EcoTote. {dict.common.copyright}
        </p>
      </div>
    </footer>
  );
}
