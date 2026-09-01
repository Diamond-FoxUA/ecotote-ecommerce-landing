"use client";

import { createContext, useContext } from "react";

type Dictionary = typeof import("@/dictionaries/en.json");

const DictionaryContext = createContext<Dictionary | null>(null);

export function DictionaryProvider({
  children,
  dict,
}: {
  children: React.ReactNode;
  dict: Dictionary;
}) {
  return <DictionaryContext value={dict}>{children}</DictionaryContext>;
}

export function useDictionary() {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary must be used inside DictionaryContext");
  }

  return context;
}
