import { getDictionary } from "@/dictionaries";
import Link from "next/link";
import HeroImg from "./HeroImg";
import LinkBtn from "@/shared/ui/LinkBtn";

type HeroProps = {
  params: Promise<{ locale: string }>;
};

export default async function Hero({ params }: HeroProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex flex-col justify-center items-center gap-6 md:gap-5 pt-28 pb-16 px-4 md:px-8 lg:pt-31 lg:px-16 lg:pb-16 md:pt-25"
    >
      <div className="flex flex-col md:flex-row gap-5 md:gap-6 lg:gap-8">
        <h1
          id="hero-heading"
          className="font-comfortaa font-bold leading-[120%] tracking-[0.01em] text-[2.5rem] lg:text-[3.5rem] md:max-w-85 lg:max-w-160"
        >
          {dict.homepage.title}
        </h1>

        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="md:text-[1.13rem] leading-[160%]">
            {dict.homepage.description}
          </p>

          <LinkBtn href="#products">{dict.common.buttons.buyNow}</LinkBtn>
        </div>
      </div>

      <HeroImg params={params} />
    </section>
  );
}
