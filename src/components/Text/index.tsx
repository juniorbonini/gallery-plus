import React from "react";
import { textVariants, type TextInterface } from "../../models/text";

export default function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextInterface) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}
