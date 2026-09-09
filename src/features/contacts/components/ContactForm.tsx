"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type ContactInput, contactSchema } from "../contactSchema";
import { sendContactMessage } from "../actions";

import { toast } from "sonner";
import ActionBtn from "@/shared/ui/ActionBtn";
import { useDictionary } from "@/shared/context/DictionaryContext";

export default function ContactForm() {
  const dict = useDictionary();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactInput) => {
    toast.promise(sendContactMessage(data), {
      loading: "Sending your message...",
      success: (res) => {
        if (!res.success) {
          throw new Error(res.error || "Failed to send");
        }

        reset();
        return "Message sent successfully!";
      },
      error: (err) => err.message || "Something went wrong.",
    });
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
          aria-required="true"
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          id="name"
          placeholder={dict.contact.form.namePlaceholder}
        />
        <span
          role="alert"
          id="name-error"
          className="text-[0.75rem] text-error leading-[160%]"
        >
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
          id="email"
          aria-required="true"
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder={dict.contact.form.emailPlaceholder}
        />
        <span
          role="alert"
          id="email-error"
          className="text-[0.75rem] text-error leading-[160%]"
        >
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
          id="message"
          placeholder={dict.contact.form.messagePlaceholder}
          maxLength={200}
          aria-required="true"
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        <span
          role="alert"
          id="message-error"
          className="text-[0.75rem] text-error leading-[160%]"
        >
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
