import { containerVariants, type ContainerInterface } from "@/models/container";
import React from "react";

export default function Container({
  as = "div",
  children,
  className,
  size,
  ...props
}: ContainerInterface) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size, className }),
      ...props,
    },
    children,
  );
}
