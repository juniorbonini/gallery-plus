import cn from "classnames";
import { Link, useLocation } from "react-router";

// @ts-expect-error: module declaration for SVG React import
import Logo from "@/assets/images/galeria-plus-full-logo.svg?react";

import Search from "@/components/Search";
import Button from "@/components/Button";
import Divider from "@/components/Divider";
import Container from "@/components/Container";
import type { MainHeaderInterface } from "@/models/main-header";
import AlbumNewDialog  from "@/components/Album/album-new-dialog";
import PhotoNewDialog  from "@/components/Photo/photo-new-dialog";

export default function MainHeader({
  className,
  ...props
}: MainHeaderInterface) {
  const { pathname } = useLocation();
  return (
    <Container
      as="header"
      className={cn(`flex justify-between items-center gap-10 `, className)}
      {...props}
    >
      <Link to="">
        <Logo className="h-5" />
      </Link>

      {pathname === "/" && (
        <>
          <Search />
          <Divider orientation="vertical" className="h-10" />
        </>
      )}

      <div className="flex items-center gap-3">
        <PhotoNewDialog trigger={<Button>Nova foto</Button>} />
        <AlbumNewDialog
          trigger={<Button variant="secondary">Criar album</Button>}
        />
      </div>
    </Container>
  );
}
