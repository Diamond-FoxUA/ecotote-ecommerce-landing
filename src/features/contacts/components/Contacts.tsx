import { getDictionary } from "@/dictionaries";
import ContactForm from "./ContactForm";
import ContactImg from "./Contactimg";

type ContactsProps = {
  params: Promise<{ locale: string }>;
};

export default async function Contacts({ params }: ContactsProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <section
      id="contacts"
      className="flex flex-col items-center gap-6 px-4 py-8 md:px-8 md:py-16 lg:flex-row lg:p-16 scroll-mt-15 lg:scroll-mt-20"
      aria-label={dict.contact.caption}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="font-comfortaa font-bold text-[2.25rem] lg:text-[3rem] leading-[120%] tracking-[0.01em] md:max-w-117 lg:max-w-161">
            {dict.contact.title}
          </h2>
          <p className="text-[1.13rem] leading-[160%]">
            {dict.contact.description}
          </p>
        </div>

        <ContactForm />
      </div>

      <div className="w-[288px] h-107 md:w-176 lg:w-161 lg:h-[767.36px] bg-gray-500 rounded-[2.5rem]">
        <ContactImg params={params} />
      </div>
    </section>
  );
}
