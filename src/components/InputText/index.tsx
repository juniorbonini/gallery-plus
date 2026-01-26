import Icon from "../Icon";
import Text from "../Text";
import {
  inputTextContainerVariants,
  inputTextIconVariants,
  inputTextVariants,
  inputTextWrapperVariants,
  type InputTextInterface,
} from "../../models/input-text";

export default function InputText({
  size,
  disabled,
  className,
  error,
  icon,
  ...props
}: InputTextInterface) {
  return (
    <div className={inputTextContainerVariants({ className })}>
      <div className={inputTextWrapperVariants({ size, disabled })}>
        {icon && (
          <Icon svg={icon} className={inputTextIconVariants({ size })} />
        )}
        <input
          className={inputTextVariants()}
          disabled={disabled as boolean}
          {...props}
        />
      </div>
      {error && (
        <Text variant="label-small" className="text-accent-red">
          Um erro do campo
        </Text>
      )}
    </div>
  );
}
