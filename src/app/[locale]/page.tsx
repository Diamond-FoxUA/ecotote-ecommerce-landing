import Hero from "@/widgets/Hero";
import Feature from "@/widgets/Features";
import Testimonials from "@/widgets/Testimonials";
import Products from "@/widgets/Products";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  return (
    <>
      <Hero params={params} />
      <Feature params={params} />
      <Products params={params} />
      <Testimonials params={params} />
      {/* Contacts */}
    </>
  );
}
