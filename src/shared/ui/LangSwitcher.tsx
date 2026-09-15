"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = pathname.split("/")[1] || "uk";

  const changeLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <nav aria-label="Language selector" className="flex gap-1">
      <button
        type="button"
        aria-label="Switch language to Ukrainian"
        aria-current={currentLocale === "uk" ? "true" : undefined}
        onClick={() => changeLocale("uk")}
        className={`${currentLocale === "uk" ? "font-semibold" : ""} border-b border-transparent hover:border-foreground cursor-pointer transition-colors duration-300`}
      >
        UA
      </button>
      <span aria-hidden="true" className="cursor-default">
        |
      </span>
      <button
        type="button"
        aria-label="Switch language to English"
        aria-current={currentLocale === "en" ? "true" : undefined}
        onClick={() => changeLocale("en")}
        className={`${currentLocale === "en" ? "font-semibold" : ""} border-b border-transparent hover:border-foreground cursor-pointer transition-colors duration-300`}
      >
        EN
      </button>
    </nav>
  );
}
