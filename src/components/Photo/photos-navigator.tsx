import cx from "classnames";
import { useNavigate } from "react-router";

import Button from "@/components/Button";
import Skeleton from "@/components/Skeleton";
import ButtonIcon from "@/components/ButtonIcon";
import type { PhotosNavigator } from "@/models/photo";

// @ts-expect-error: module declaration for SVG React import
import ArrowLeftIcon from "@/assets/icons/chevron-left.svg?react";

// @ts-expect-error: module declaration for SVG React import
import ArrowRightIcon from "@/assets/icons/chevron-right.svg?react";

export default function PhotoNavigator({
  previousPhotoId,
  nextPhotoId,
  loading,
  className,
  ...props
}: PhotosNavigator) {
  const navigate = useNavigate();
  return (
    <div className={cx("flex gap-2", className)} {...props}>
      {!loading ? (
        <>
          <ButtonIcon
            icon={ArrowLeftIcon}
            variant="secondary"
            disabled={!previousPhotoId}
            onClick={() => {
              navigate(`/fotos/${previousPhotoId}`);
            }}
          />
          <Button
            icon={ArrowRightIcon}
            variant="secondary"
            disabled={!nextPhotoId}
            onClick={() => {
              navigate(`/fotos/${nextPhotoId}`);
            }}
          >
            Próxima imagem
          </Button>
        </>
      ) : (
        <>
          <Skeleton className="w-10 h-10" />
          <Skeleton className="w-20 h-10" />
        </>
      )}
    </div>
  );
}
