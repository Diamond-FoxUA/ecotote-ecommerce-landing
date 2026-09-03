import Hero from "@/widgets/Hero";
import Feature from "@/widgets/Features";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  return (
    <>
      <Hero params={params} />
      <Feature params={params} />
    </>
  );
}
