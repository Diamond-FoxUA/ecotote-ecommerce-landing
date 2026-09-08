import { getDictionary } from "@/dictionaries";
import ProductImg from "./ProductImg";
import ActionBtn from "@/shared/ui/ActionBtn";

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

      <ul className="flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-12 lg:gap-y-16 w-full items-center md:items-stretch justify-center">
        {dict.products.products.map((p) => (
          <li
            key={p.id}
            className="flex flex-col w-full max-w-[320px] md:max-w-85 lg:max-w-77.5"
          >
            <article className="flex flex-col gap-4 items-center w-full h-full">
              <ProductImg src={p.imgTab} alt="" />

              <div className="flex flex-col items-center justify-between flex-1">
                <h3 className="font-semibold text-[1.13rem] leading-[160%] text-center">
                  {p.title}
                </h3>
                <p className="text-[0.88rem] leading-[160%] text-center pb-2">
                  {p.description}
                </p>
                <strong
                  className="font-semibold text-[1.25rem] leading-[160%] text-center"
                  aria-label={`${dict.common.price} $${p.price}`}
                >
                  ${p.price}
                </strong>
              </div>

              <ActionBtn type="button" variant="secondary">
                {dict.common.buttons.buy}
              </ActionBtn>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
