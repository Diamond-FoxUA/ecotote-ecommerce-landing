"use client";
import { useState, useEffect } from "react";
import type { Product } from "./OrderFormDialog";

import ActionBtn from "@/shared/ui/ActionBtn";
import { useDictionary } from "@/shared/context/DictionaryContext";
import ProductImg from "./ProductImg";
import OrderFormDialog from "./OrderFormDialog";

export default function ProductList() {
  const dict = useDictionary();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => document.body.classList.remove("overflow-hidden");
  }, [selectedProduct]);

  return (
    <>
      <ul className="flex flex-col gap-10 md:flex-row md:flex-wrap md:gap-x-6 md:gap-y-12 lg:gap-y-16 w-full items-center md:items-stretch justify-center">
        {dict.products.products.map((p) => (
          <li
            key={p.id}
            className="flex flex-col w-full max-w-[320px] md:max-w-85 lg:max-w-77.5"
          >
            <article className="flex flex-col gap-4 items-center w-full h-full">
              <ProductImg src={p.imgTab} alt="" />

              <div className="flex flex-col items-center justify-between flex-1">
                <h3 className="font-semibold text-[1.13rem] leading-[160%] text-center">
                  {p.title}
                </h3>
                <p className="text-[0.88rem] leading-[160%] text-center pb-2">
                  {p.description}
                </p>
                <strong
                  className="font-semibold text-[1.25rem] leading-[160%] text-center"
                  aria-label={`${dict.common.price} $${p.price}`}
                >
                  ${p.price}
                </strong>
              </div>

              <ActionBtn
                type="button"
                variant="secondary"
                onClick={() => setSelectedProduct(p)}
              >
                {dict.common.buttons.buy}
              </ActionBtn>
            </article>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <OrderFormDialog
          onClose={() => setSelectedProduct(null)}
          product={selectedProduct}
        />
      )}
    </>
  );
}
