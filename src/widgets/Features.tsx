import { getDictionary } from "@/dictionaries";

import FeaturesImg from "./FeaturesImg";

type FeaturesProps = {
  params: Promise<{ locale: string }>;
};

export default async function Features({ params }: FeaturesProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section
      aria-label={dict.features.caption}
      className="relative z-0 text-center bg-gray-600 overflow-hidden"
    >
      <FeaturesImg params={params} />

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20 flex flex-col items-center w-full h-full py-16 px-4 md:py-20 md:px-8 lg:px-16 lg:pt-28 lg:pb-23.5">
        <span aria-hidden="true" className="font-semibold leading-[150%] text-white">
          {dict.features.caption}
        </span>
        <h2 className="font-comfortaa font-bold text-white text-[2.25rem] leading-[120%] tracking-[0.01em] pt-3 md:pt-4 lg:text-[3.5rem] lg:max-w-157.25">
          {dict.features.title}
        </h2>
        <p className="text-white leading-[160%] pt-5 md:pt-6 md:text-[1.13rem] md:max-w-143.25">
          {dict.features.description}
        </p>
      </div>
    </section>
  );
}
