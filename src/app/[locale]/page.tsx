import { getDictionary } from "@/dictionaries";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return (
    <>
      <h1>{dict.homepage.title}</h1>
    </>
  );
}
