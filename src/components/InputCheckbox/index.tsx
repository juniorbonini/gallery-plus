import {
  inputCheckboxIconVariants,
  inputCheckboxVariants,
  inputCheckboxWrapperVariants,
  type InputCheckboxInterface,
} from "@/models/input-checkbox";

// @ts-expect-error: module declaration for SVG React import
import CheckIcon from "@/assets/icons/check.svg?react";
import Icon from "@/components/Icon";

export default function InputCheckbox({
  variant,
  size,
  disabled,
  className,
  ...props
}: InputCheckboxInterface) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={inputCheckboxVariants({ variant, size, disabled })}
        {...props}
      />

      <Icon svg={CheckIcon} className={inputCheckboxIconVariants({ size })} />
    </label>
  );
}
