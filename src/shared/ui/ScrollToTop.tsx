"use client";

import { useState, useEffect } from "react";
import Icon from "./Icon";

import { useDictionary } from "../context/DictionaryContext";

export default function ScrollToTop() {
  const dict = useDictionary();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currectScrollY = window.scrollY;

      if (currectScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={`fixed z-50 bottom-[5%] right-[10%] md:bottom-[10%] md:right-[5%] flex justify-center items-stretch rounded-full p-2 bg-green-bg border border-foreground fill-foreground hover:bg-green-accent ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-70"} ${!isVisible ? "pointer-events-none" : "pointer-events-auto"} transition-all duration-300 cursor-pointer`}
      onClick={scrollToTop}
      aria-label={dict.common.scrollToTop}
    >
      <Icon
        aria-hidden="true"
        iconName="icon-arrow"
        size={24}
        className="-rotate-90"
      />
    </button>
  );
}
