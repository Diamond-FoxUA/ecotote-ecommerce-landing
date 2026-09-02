import { useDictionary } from "@/shared/context/DictionaryContext";

type AddressListProps = {
  onClose?: () => void;
  className?: string;
};

export default function AddressList({ onClose, className }: AddressListProps) {
  const dict = useDictionary();
  const navDict = dict.navigation;

  const addressItems = [navDict.phone, navDict.email];

  return (
    <address className={`not-italic `}>
      <ul
        className={`flex flex-col lg:flex-row gap-4 ${className ? className : ""}`}
      >
        {addressItems.map((i) => (
          <li key={i}>
            <a
              onClick={onClose}
              href={`${i.startsWith("+") ? "tel:" : "mailto:"}${i}`}
              className="font-fira text-[1rem] leading-[160%] border-b border-transparent hover:border-foreground active:text-foreground/70 active:border-foreground/70 pb-1 transition-all duration-300"
            >
              {i}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
}
