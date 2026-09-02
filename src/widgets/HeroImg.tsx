import { getImageProps } from "next/image";
import heroImgMob from "@/../public/img/mob/hero-mob@2x.jpg";
import heroImgTab from "@/../public/img/tab/hero-tab@2x.jpg";
import heroImgDesk from "@/../public/img/desk/hero-desk@2x.jpg";

import { getDictionary } from "@/dictionaries";

type HeroImgProps = {
  params: Promise<{ locale: string }>;
};

export default async function HeroImg({ params }: HeroImgProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const imgAlt = dict.homepage.imgAlt;

  const { props: desktopProps } = getImageProps({
    src: heroImgDesk,
    alt: imgAlt,
    width: 1312,
    height: 498,
    quality: 90,
  });
  const { props: tabletProps } = getImageProps({
    src: heroImgTab,
    alt: imgAlt,
    width: 704,
    height: 267.22,
    quality: 90,
  });
  const { props: mobileProps } = getImageProps({
    src: heroImgMob,
    alt: imgAlt,
    width: 288,
    height: 285,
    quality: 90,
  });

  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={desktopProps.srcSet} />
      <source media="(min-width: 768px)" srcSet={tabletProps.srcSet} />

      <img
        src={mobileProps.src}
        srcSet={mobileProps.srcSet}
        alt={imgAlt}
        loading="eager"
        fetchPriority="high"
        className="w-[288px] h-71.25 md:w-176 md:h-[267.22px] lg:w-328 lg:h-124.5 rounded-[2.5rem]"
      />
    </picture>
  );
}
