import { dividerVariants, type DividerInterface } from "@/models/divider";

export default function Divider({
  className,
  orientation = "horizontal",
  ...props
}: DividerInterface) {
  return (
    <div
      className={dividerVariants({ className, orientation })}
      {...props}
    ></div>
  );
}
