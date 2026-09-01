"use client";
import { useState } from "react";

import Link from "next/link";
import Logo from "@/shared/ui/Logo";
import Icon from "@/shared/ui/Icon";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed z-50 w-full py-4 px-5 md:px-8 lg:px-16 lg:py-5.75 bg-green-bg">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="lg:hidden hover:scale-110 active:scale-90 transition-transform duration-300"
          >
            <Logo width={84} height={36} />
          </Link>

          <div className="hidden lg:block w-full">
            <Navigation />
          </div>

          {!isMenuOpen ? (
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden active:scale-70 transition-transform duration-300"
            >
              <Icon iconName="icon-menu" size={32} />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="lg:hidden active:scale-70 transition-transform duration-300"
            >
              <Icon
                iconName="icon-close"
                size={32}
                className="scale-140 active:scale-130 transition-transform duration-300"
              />
            </button>
          )}
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
