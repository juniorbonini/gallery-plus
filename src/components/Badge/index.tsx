import cx from "classnames";

import {
  badgeSkeletonVariants,
  badgeTextVariants,
  badgeVariants,
  type BadgeInterface,
} from "@/models/badge";
import Skeleton from "@/components/Skeleton";
import Text from "@/components/Text";

export default function Badge({
  variant,
  size,
  className,
  children,
  loading,
  ...props
}: BadgeInterface) {
  if (loading) {
    return (
      <Skeleton
        rounded="full"
        className={cx(
          badgeVariants({ variant: "none" }),
          badgeSkeletonVariants({ size }),
          className,
        )}
      />
    );
  }

  return (
    <div className={badgeVariants({ variant, size, className })} {...props}>
      <Text className={badgeTextVariants({ size })}>{children}</Text>
    </div>
  );
}
