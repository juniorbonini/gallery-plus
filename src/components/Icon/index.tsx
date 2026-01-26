import { iconVariants, type IconInterface } from "../../models/icon";

export default function Icon({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconInterface) {
  return (
    <SvgComponent className={iconVariants({ animate, className })} {...props} />
  );
}
