import cx from "classnames";

import type { ContentInterface } from "@/models/content";

export default function Content({
  children,
  className,
  ...props
}: ContentInterface) {
  return (
    <main className={cx("mt-20 pb-20", className)} {...props}>
      {children}
    </main>
  );
}
