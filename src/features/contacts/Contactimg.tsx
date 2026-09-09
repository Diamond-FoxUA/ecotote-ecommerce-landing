import { getImageProps } from "next/image";
import contactImgMob from "@/../public/img/mob/contact-mob@2x.jpg";
import contactImgTab from "@/../public/img/tab/contact-tab@2x.jpg";
import contactImgDesk from "@/../public/img/desk/contact-desk@2x.jpg";

import { getDictionary } from "@/dictionaries";

type ContactImgProps = {
  params: Promise<{ locale: string }>;
};

export default async function ContactImg({ params }: ContactImgProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const imgAlt = dict.contact.imgAlt;

  const { props: desktopProps } = getImageProps({
    src: contactImgDesk,
    alt: imgAlt,
    width: 644,
    height: 767.36,
    quality: 90,
    loading: "lazy",
  });
  const { props: tabletProps } = getImageProps({
    src: contactImgTab,
    alt: imgAlt,
    width: 704,
    height: 428,
    quality: 90,
    loading: "lazy",
  });
  const { props: mobileProps } = getImageProps({
    src: contactImgMob,
    alt: imgAlt,
    width: 288,
    height: 428,
    quality: 90,
    loading: "lazy",
  });

  return (
    <picture>
      <source media="(min-width: 650px)" srcSet={desktopProps.srcSet} />
      <source media="(max-width: 321px)" srcSet={tabletProps.srcSet} />

      <img
        src={mobileProps.src}
        srcSet={mobileProps.srcSet}
        loading="lazy"
        alt={imgAlt}
        className="w-full h-full object-cover rounded-[2.5rem]"
      />
    </picture>
  );
}
