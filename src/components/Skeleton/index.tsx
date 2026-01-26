import { skeletonVariants, type SkeletonInterface } from "@/models/skeleton";

export default function Skeleton({
  rounded,
  className,
  ...props
}: SkeletonInterface) {
  return (
    <div className={skeletonVariants({ rounded, className })} {...props}></div>
  );
}
