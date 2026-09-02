import Hero from "@/widgets/Hero";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  
  return (
    <Hero params={params}/>
  );
}
