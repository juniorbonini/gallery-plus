import cx from "classnames";

// @ts-expect-error: module declaration for SVG React import
import SpinnerIcon from "../../assets/icons/spinner.svg?react"

import Text from "../Text";
import Icon from "../Icon";
import {
  buttonIconVariants,
  buttonVariants,
  textButtonVariants,
  type ButtonInterface,
} from "../../models/button";

export default function Button({
  variant,
  size,
  disabled,
  children,
  className,
  handling,
  icon,
  type = "button",
}: ButtonInterface) {
  return (
    <button
      type={type}
      className={buttonVariants({
        variant,
        size,
        disabled,
        handling,
        className: cx(
          {
            "pr-1": icon,
          },
          className,
        ),
      })}
      disabled={disabled as boolean}
    >
      <Text
        variant="label-medium"
        className={textButtonVariants({ variant, size })}
      >
        {children}
      </Text>
      {(icon || handling) && (
        <Icon
          svg={handling ? SpinnerIcon : icon!}
          animate={handling}
          className={buttonIconVariants({ variant, size, handling })}
        />
      )}
    </button>
  );
}
