import cn from "classnames";
import { Link } from "react-router";

// @ts-expect-error: module declaration for SVG React import
import Logo from "@/assets/images/galeria-plus-full-logo.svg?react";

import Container from "@/components/Container";
import Button from "@/components/Button";
import type { MainHeaderInterface } from "@/models/main-header";
import Divider from "@/components/Divider";
import NewPhotoDialog from "@/components/Photo/new-photo.dialog";
import Search from "@/components/Search";
import NewAlbumDialog from "@/components/Album/new-album-dialog";

export default function MainHeader({
  className,
  ...props
}: MainHeaderInterface) {
  return (
    <Container
      as="header"
      className={cn(`flex justify-between items-center gap-10 `, className)}
      {...props}
    >
      <Link to="">
        <Logo className="h-5" />
      </Link>

      <Search />
      <Divider orientation="vertical" className="h-10" />

      <div className="flex items-center gap-3">
      <NewPhotoDialog trigger={<Button>Nova foto</Button>} />
      <NewAlbumDialog trigger={<Button variant="secondary">Criar album</Button>} />
      </div>
    </Container>
  );
}
