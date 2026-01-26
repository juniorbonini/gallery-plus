import { alertVariants, type AlertInterface } from "@/models/alert";
import Text from "../Text";

export default function Alert({
  variant,
  className,
  children,
  ...props
}: AlertInterface) {
  return (
    <div
      role="alert"
      className={alertVariants({ variant, className })}
      {...props}
    >
      <Text>{children}</Text>
    </div>
  );
}
