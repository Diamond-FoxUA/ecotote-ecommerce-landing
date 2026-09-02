"use client";
import { useState } from "react";

import Logo from "@/shared/ui/Logo";
import BurgerBtn from "./BurgerBtn";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import AddressList from "./AddressList";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed z-50 w-full py-4 px-5 md:px-8 lg:px-16 lg:py-5.75 bg-green-bg">
        <div className="flex justify-between items-center">
          <div className="hover:scale-110 active:scale-90 transition-transform duration-300">
            <Logo className="lg:w-[106.51px] lg:h-[45.65px]" />
          </div>

          <Navigation className="hidden lg:block" />
          <div className="hidden lg:block">
            <AddressList />
          </div>

          <BurgerBtn
            isOpen={isMenuOpen}
            setIsOpen={() =>
              isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
            }
          />
        </div>
      </header>

      <MobileMenu
        onClose={() => setIsMenuOpen(false)}
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />
    </>
  );
}
