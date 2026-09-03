import Hero from "@/widgets/Hero";
import Feature from "@/widgets/Features";
import Testimonials from "@/widgets/Testimonials";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  return (
    <>
      <Hero params={params} />
      <Feature params={params} />
      {/* Products */}
      <Testimonials params={params} />
      {/* Contacts */}
    </>
  );
}
