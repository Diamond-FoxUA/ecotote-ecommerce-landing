"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";

import { productSchema } from "../orderSchema";
import type { orderInput } from "../orderSchema";
import { createProductOrder } from "../actions";

import Icon from "@/shared/ui/Icon";
import ActionBtn from "@/shared/ui/ActionBtn";
import { toast, Toaster } from "sonner";

export type Product = {
  id: number;
  title: string;
  description: string;
  imgMob: string;
  imgTab: string;
  imgDesk: string;
  price: number;
};

type OrderFormDialogProps = {
  onClose: () => void;
  product?: Product | null;
};

export default function OrderFormDialog({
  onClose,
  product,
}: OrderFormDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (product) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [product]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      productId: "",
      productName: "",
      price: "",
      customerName: "",
      phoneOrTelegram: "",
      honeypot: "",
    },
  });

  const onSubmit = (data: orderInput) => {
    if (!product) return;

    const fullOrderPayload: orderInput = {
      productId: String(product.id),
      productName: product.title,
      price: `${product.price}`,
      customerName: data.customerName,
      phoneOrTelegram: data.phoneOrTelegram,
      honeypot: data.honeypot,
    };

    toast.promise(createProductOrder(fullOrderPayload), {
      loading: "Processing your order allocation...",
      success: (res) => {
        if (!res.success)
          throw new Error(res.error || "Order validation rejected.");

        reset();
        return "Order submitted successfully! We will reach our shortly.";
      },
      error: (err) =>
        err.message || "Failed to submit order. Please try again.",
    });

    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      className="fixed inset-0 open:flex flex-col m-auto w-full h-fit max-w-2xl bg-background p-6 lg:p-8 rounded-[0.70rem] backdrop:bg-foreground/50 shadow-2xl"
    >
      <form method="dialog" className="absolute right-6 top-3">
        <button
          aria-label="Close checkout modal"
          className="block bg-transparent w-6 h-6 cursor-pointer fill-foreground hover:fill-foreground/60 active:fill-btn-active/60 transition-colors duration-300"
        >
          <Icon iconName="icon-close" className="w-10 h-10" />
        </button>
      </form>

      <div className="pt-2 flex flex-col gap-5">
        <h3 className="font-comfortaa text-center font-bold text-[1.5rem] border-b border-dashed border-foreground/50 pb-5">
          Checkout
        </h3>

        <div className="text-2xl flex justify-between items-center border-b border-dashed border-foreground/50 pb-5">
          <p>{product?.title}</p>
          <strong> ${product?.price}</strong>
        </div>

        <p className="text-[0.88rem] leading-[160%]">
          Please provide your details below to finalize your booking.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div
            className="w-0 h-0 overflow-hidden -z-50 opacity-0 absolute"
            aria-hidden="true"
          >
            <input {...register("honeypot")} tabIndex={-1} autoComplete="off" />
          </div>

          <div>
            <label htmlFor="customerName" className="leading-[160%]">
              Name
            </label>
            <input
              {...register("customerName")}
              className={`leading-[160%] placeholder:text-foreground/60 bg-foreground/5 focus:border-foreground/15 outline-none block w-full px-3 py-2 border rounded-[0.38rem] pb-2 caret-foreground ${errors.customerName ? "text-error border-error" : "text-foreground border-foreground/15"}`}
              type="text"
              id="customerName"
              placeholder="Enter your name..."
              aria-required="true"
              aria-invalid={errors.customerName ? "true" : "false"}
              aria-describedby={
                errors.customerName ? "customerName-error" : undefined
              }
            />
            {errors.customerName && (
              <p
                role="alert"
                id="customerName-error"
                className="text-xs text-error"
              >
                {errors.customerName.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phoneOrTelegram" className="leading-[160%]">
              Phone or Telegram
            </label>
            <input
              {...register("phoneOrTelegram")}
              className={`leading-[160%] placeholder:text-foreground/60 bg-foreground/5 focus:border-foreground/15 outline-none block w-full px-3 py-2 border rounded-[0.38rem] pb-2 caret-foreground ${errors.phoneOrTelegram ? "text-error border-error" : "text-foreground border-foreground/15"}`}
              type="text"
              id="phoneOrTelegram"
              placeholder="Enter your phone or Telegram..."
              aria-required="true"
              aria-invalid={errors.phoneOrTelegram ? "true" : "false"}
              aria-describedby={
                errors.phoneOrTelegram ? "phoneOrTelegram-error" : undefined
              }
            />
            {errors.phoneOrTelegram && (
              <p
                role="alert"
                id="phoneOrTelegram-error"
                className="text-xs text-error"
              >
                {errors.phoneOrTelegram.message}
              </p>
            )}
          </div>

          <ActionBtn type="submit" disabled={isSubmitting} className="mt-6">
            Buy
          </ActionBtn>
        </form>
      </div>
    </dialog>
  );
}