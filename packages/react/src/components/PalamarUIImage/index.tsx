/* eslint-disable prettier/prettier */
import { ComponentProps } from "react";
import { PalamarUIImageContainer, PalamarUIImg } from "./styles";

export interface PalamarUIImageProps extends ComponentProps<typeof PalamarUIImageContainer> {
  src?: string;  
  alt?: string;
  width?: string | number | undefined;
  height?: string | number | undefined;
  maxWidth?: string | number | undefined;
  overflow?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  display?: string | undefined;
  flexDirection?: string | undefined;
  alignItems?: string | undefined;
  justifyContent?: string | undefined;
  position?: string | undefined;
  top?: string | number | undefined;
  left?: string | number | undefined;
  right?: string | number | undefined;
  bottom?: string | number | undefined;
  zIndex?: string | number | undefined;
  ariaLabel?: string | undefined;
  title?: string | undefined;
}

export const PalamarUIImage = (props: PalamarUIImageProps) => {
  return (
    <PalamarUIImageContainer {...props}>
      <PalamarUIImg 
        src={props.src}         
        alt={props.alt} 
        css={{
          width: props.width,
          height: props.height,
          overflow: props.overflow,
          objectFit: props.objectFit,
          objectPosition: props.objectPosition,
          display: props.display,
          flexDirection: props.flexDirection,
          alignItems: props.alignItems,
          justifyContent: props.justifyContent,
          position: props.position,
          top: props.top,
          left: props.left,
          right: props.right,
          bottom: props.bottom,
          zIndex: props.zIndex,
          ariaLabel: props.ariaLabel,
          title: props.title,
        }}
      />            
    </PalamarUIImageContainer>
  )
}

PalamarUIImage.displayName = 'Image'