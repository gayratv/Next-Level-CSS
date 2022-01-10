import * as React from "react";
import styled from "@emotion/styled";
import {
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  flex,
  height,
  justifyContent,
  space,
  style,
  BackgroundImageProps,
  BackgroundPositionProps,
  BackgroundSizeProps,
  FlexProps,
  HeightProps,
  JustifyContentProps,
  SpaceProps
} from "styled-system";

const afterImage = style({
  prop: "afterImage",
  cssProperty: "backgroundImage"
});
const beforeImage = style({
  prop: "beforeImage",
  cssProperty: "backgroundImage"
});

const Container = styled.div<
  BackgroundImageProps &
    BackgroundPositionProps &
    BackgroundSizeProps &
    FlexProps &
    HeightProps &
    JustifyContentProps &
    SpaceProps & {
      css?: any;
      afterImage?: any;
      beforeImage?: any;
    }
>`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin:0;
  position: relative;

  transform: translateZ(1px);
  &:after {
    content: " ";
    background-repeat: no-repeat;
    background-size: contain;
    height: 300px;
    width: 300px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 300px;
    transform: translateZ(2px) translateX(-50%);
    z-index: -1;
    ${afterImage}
  }

  &:before {
    content: " ";
    background-repeat: no-repeat;
    background-size: contain;
    height: 30px;
    width: 30px;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    bottom: 450px;
    transform: translateZ(2px) translateX(64%) translateY(49px);
    z-index: 0;
    ${beforeImage}
  }

  ${backgroundImage};
  ${backgroundPosition};
  ${backgroundSize};
  ${flex};
  ${height};
  ${justifyContent}
  ${space}
  ${(props) => props?.css}
`;

interface IParallax {
  height?: any;
  backgroundImage?: any;
  backgroundPosition?: any;
  backgroundSize?: any;
  justifyContent?: any;
  flex?: any;
  m?: any;
  css?: any;
  afterImage?: any;
  beforeImage?: any;
  children?: any;
}

export const Parallax: React.FC<IParallax> = ({
  height,
  backgroundImage,
  backgroundPosition,
  backgroundSize,
  justifyContent,
  flex,
  m,
  css,
  afterImage,
  beforeImage,
  children,
  ...restProps
}) => {
  return (
    <Container
      backgroundImage={backgroundImage}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      flex={flex}
      height={height}
      justifyContent={justifyContent}
      m={m}
      css={css}
      afterImage={afterImage}
      beforeImage={beforeImage}
      {...restProps}
    >
      {children}
    </Container>
  );
};
