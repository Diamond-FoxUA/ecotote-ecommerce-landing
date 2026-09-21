import { getImageProps } from "next/image";
import heroImgMob from "@/../public/img/mob/features-mob@2x.jpg";
import heroImgTab from "@/../public/img/tab/features-tab@2x.jpg";
import heroImgDesk from "@/../public/img/desk/features-desk@2x.jpg";

import { getDictionary } from "@/dictionaries";

type FeatureImgProps = {
  params: Promise<{ locale: string }>;
};

export default async function FeatureImg({ params }: FeatureImgProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const imgAlt = dict.homepage.imgAlt;

  const { props: desktopProps } = getImageProps({
    src: heroImgDesk,
    alt: imgAlt,
    width: 1312,
    height: 498,
    quality: 90,
    sizes: "(max-width: 1440px) 100vw, 1312px",
  });
  const { props: tabletProps } = getImageProps({
    src: heroImgTab,
    alt: imgAlt,
    width: 704,
    height: 267.22,
    quality: 75,
    sizes: "100vw",
  });
  const { props: mobileProps } = getImageProps({
    src: heroImgMob,
    alt: imgAlt,
    width: 288,
    height: 285,
    quality: 75,
    sizes: "100vw",
  });

  return (
    <picture className="absolute inset-0 w-full h-full">
      <source
        media="(min-width: 650px)"
        srcSet={desktopProps.srcSet}
        sizes={desktopProps.sizes}
      />
      <source
        media="(min-width: 321px)"
        srcSet={tabletProps.srcSet}
        sizes={tabletProps.sizes}
      />

      <img
        aria-hidden="true"
        src={mobileProps.src}
        srcSet={mobileProps.srcSet}
        alt=""
        className="w-full h-full object-cover"
        sizes={mobileProps.sizes}
      />
    </picture>
  );
}
