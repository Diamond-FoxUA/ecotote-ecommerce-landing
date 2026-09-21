import Image from "next/image";

type ProductImgProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function ProductImg({ src, alt, className }: ProductImgProps) {
  return (
    <div
      className={`relative w-[288px] h-86.25 md:w-85 md:h-102 lg:w-77.5 lg:h-93 bg-gray-700 rounded-4xl ${className ? className : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-4xl"
        quality={75}
        sizes="(max-width: 767px) 288px, (max-width: 1439px) 340px, 310px"
      />
    </div>
  );
}
