import { getDictionary } from "@/dictionaries";
import Rating from "./Rating";

type TestimonialsParams = {
  params: Promise<{ locale: string }>;
};

export default async function Testimonials({ params }: TestimonialsParams) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const comments = dict.testimonials.testimonials;

  return (
    <section
      id="testimonials"
      aria-label={dict.testimonials.caption}
      className="flex flex-col items-center justify-center gap-8 py-8 px-4 md:px-8 md:py-16 lg:px-16 lg:gap-20 scroll-mt-15 lg:scroll-mt-20"
    >
      <h2 className="font-comfortaa font-bold text-[2.25rem] lg:text-[3rem] lg:max-w-140 leading-[120%] tracking-[0.01em] text-center">
        {dict.testimonials.title}
      </h2>

      <ul className="flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-8 lg:flex lg:flex-row lg:items-stretch">
        {comments.map((c) => (
          <li key={c.id} className="flex w-full">
            <figure className="flex flex-1 flex-col h-full gap-3">
              <Rating
                aria-label={`${dict.testimonials.ratingCaption} ${c.rating} ${dict.testimonials.starsCaption}`}
                rating={c.rating}
              />

              <blockquote>
                <p className="font-comfortaa font-bold text-[1.25rem] leading-[140%] tracking-[0.01em]">
                  {c.comment}
                </p>
              </blockquote>

              <figcaption className="mt-auto">
                <strong className="font-semibold leading-[160%]">
                  {c.name}
                </strong>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
