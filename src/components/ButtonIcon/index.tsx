import {
  buttonIconIconVariants,
  buttonIconVariant,
  type ButtonIconInterface,
} from "@/models/button-icon";

// @ts-expect-error: module declaration for SVG React import
import SpinnerIcon from "@/assets/icons/spinner.svg?react";

import Icon from "@/components/Icon";

export default function ButtonIcon({
  variant,
  size,
  handling,
  className,
  disabled,
  icon,
  ...props
}: ButtonIconInterface) {
  return (
    <button
      className={buttonIconVariant({
        variant,
        size,
        handling,
        disabled,
        className,
      })}
      {...props}
    >
      <Icon
        svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  );
}
