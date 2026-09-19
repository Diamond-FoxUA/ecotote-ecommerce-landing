"use client";

import ActionBtn from "./ActionBtn";
import { useDictionary } from "../context/DictionaryContext";

export default function NavBtn() {
  const dict = useDictionary();

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
  };

  return (
    <ActionBtn type="button" onClick={(e) => handleScroll(e, "products")}>
      {dict.common.buttons.buyNow}
    </ActionBtn>
  );
}
