import type { CSSProperties, ReactNode, Ref } from 'react';
import type { MaskPosition } from '../lib/hooks';

interface MaskedCardProps {
  /** Shared section background image. */
  bgImage: string;
  /** Card geometry within the section (from useMaskPositions). */
  position?: MaskPosition;
  /** Rendered image width at section height (from useImageWidth). */
  imageWidth: number;
  /** Horizontal focal point 0..1 – which slice of the image to reveal. */
  focalX: number;
  className?: string;
  children?: ReactNode;
  cardRef?: Ref<HTMLDivElement>;
  /** Extra inline style (e.g. the staggered reveal animation). */
  style?: CSSProperties;
}

const EMPTY: MaskPosition = { x: 0, y: 0, sw: 0, sh: 0 };

/**
 * A single "window" into a large image shared across many cards. All cards
 * position the same image relative to the section, so together they read as
 * one continuous mosaic while remaining separate rounded cards.
 */
export default function MaskedCard({
  bgImage,
  position,
  imageWidth,
  focalX,
  className = '',
  children,
  cardRef,
  style,
}: MaskedCardProps) {
  const pos = position ?? EMPTY;
  const overflow = imageWidth > pos.sw ? imageWidth - pos.sw : 0;
  const focalOffset = overflow * focalX;

  const maskStyle: CSSProperties = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: `auto ${pos.sh}px`,
    backgroundPosition: `-${pos.x + focalOffset}px -${pos.y}px`,
    backgroundRepeat: 'no-repeat',
    ...style,
  };

  return (
    <div ref={cardRef} className={className} style={maskStyle}>
      {children}
    </div>
  );
}
