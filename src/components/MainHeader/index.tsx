import cn from "classnames";
import { Link } from "react-router";

// @ts-expect-error: module declaration for SVG React import
import Logo from "@/assets/images/galeria-plus-full-logo.svg?react";

import Container from "@/components/Container";
import Button from "../Button";
import type { MainHeaderInterface } from "@/models/main-header";

export default function MainHeader({ className, ...props }: MainHeaderInterface) {
  return (
    <Container as="header" className={cn(`flex justify-between items-center gap-10`, className)} {...props}>
      <Link to="">
        <Logo className="h-5" />
      </Link>
      <div className="flex items-center gap-3">
        <Button>Nova foto</Button>
        <Button variant="secondary">Criar album</Button>
      </div>
    </Container>
  );
}
