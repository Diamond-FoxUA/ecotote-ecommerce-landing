import { getDictionary } from "@/dictionaries";
import ProductList from "./ProductList";

type ProductsProps = {
  params: Promise<{ locale: string }>;
};

export default async function Products({ params }: ProductsProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section
      id="products"
      aria-label={dict.products.caption}
      className="flex flex-col items-center gap-4 w-full px-4 py-6 md:gap-8 md:py-16 md:px-4 lg:p-16 scroll-mt-15 lg:scroll-mt-20"
    >
      <h2 className="font-comfortaa font-bold text-[2.25rem] lg:text-[3rem] leading-[120%] tracking-[0.01em] text-center">
        {dict.products.title}
      </h2>

      <ProductList />
    </section>
  );
}
