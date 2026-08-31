import "server-only";

type Dictionary = typeof import("./dictionaries/en.json");
type Locale = "en" | "uk";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  uk: () => import("./dictionaries/uk.json").then((module) => module.default),
};

export const getDictionary = async (locale: string): Promise<Dictionary> => {
  const targetLocale = (locale in dictionaries ? locale : "en") as Locale;
  return dictionaries[targetLocale]();
};
