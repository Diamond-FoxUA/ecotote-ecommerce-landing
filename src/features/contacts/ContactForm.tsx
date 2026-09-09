"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { toast } from "sonner";
import ActionBtn from "@/shared/ui/ActionBtn";
import { useDictionary } from "@/shared/context/DictionaryContext";

const schema = z.object({
  name: z.string().min(2, "Minimum 2 characters"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Minimum 10 characters"),
  honeypot: z.string().optional(),
});

export default function ContactForm() {
  const dict = useDictionary();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    toast.success("Submitted!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="hidden" aria-hidden="true">
        <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="name" className="leading-[160%]">
          {dict.contact.form.name}
        </label>
        <input
          {...register("name")}
          className={`leading-[160%] placeholder:text-foreground/60 bg-foreground/5 focus:border-foreground/15 outline-none block w-full px-3 py-2 border rounded-[0.38rem] pb-2 caret-foreground ${errors.name ? "text-error border-error" : "text-foreground border-foreground/15"}`}
          type="text"
          name="name"
          id="name"
          placeholder={dict.contact.form.namePlaceholder}
        />
        <span className="text-[0.75rem] text-error leading-[160%]">
          {errors.name?.message}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="leading-[160%]">
          {dict.contact.form.email}
        </label>
        <input
          {...register("email")}
          className="leading-[160%] placeholder:text-foreground/60 bg-foreground/5 focus:border-foreground/15 outline-none block w-full px-3 py-2 border border-foreground/15 rounded-[0.38rem] pb-2 caret-foreground"
          type="email"
          name="email"
          id="email"
          placeholder={dict.contact.form.emailPlaceholder}
        />
        <span className="text-[0.75rem] text-error leading-[160%]">
          {errors.email?.message}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="leading-[160%]">
          {dict.contact.form.message}
        </label>
        <textarea
          {...register("message")}
          className="leading-[160%] placeholder:text-foreground/60 bg-foreground/5 focus:border-foreground/15 outline-none block w-full h-45 px-3 py-2 border border-foreground/15 rounded-[0.38rem] pb-2 resize-none overflow-y-auto caret-foreground"
          name="message"
          id="message"
          placeholder={dict.contact.form.messagePlaceholder}
          maxLength={200}
        />
        <span className="text-[0.75rem] text-error leading-[160%]">
          {errors.message?.message}
        </span>
      </div>

      <ActionBtn
        type="submit"
        className="md:max-w-62.25 lg:max-w-49.5"
        disabled={isSubmitting}
      >
        {dict.common.buttons.send}
      </ActionBtn>
    </form>
  );
}
