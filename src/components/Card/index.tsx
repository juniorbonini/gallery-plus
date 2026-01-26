import { cardVariants, type CardInterface } from "@/models/card";
import React from "react";

export default function Card({
  variant,
  as = "div",
  size,
  className,
  children,
  ...props
}: CardInterface) {
  return React.createElement(
    as,
    {
      className: cardVariants({ variant, size, className }),
      ...props,
    },
    children,
  );
}
