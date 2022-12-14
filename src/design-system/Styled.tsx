import styled from '@emotion/styled';
import React, {ElementType} from 'react';
// @ts-ignore
import fluid from "fluid-system";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  SizeProps,
  space,
  SpaceProps,
  position,
  PositionProps,
} from 'styled-system';

interface StyledComponentDto
  extends SpaceProps,
  LayoutProps,
  GridProps,
  SizeProps,
  FlexboxProps,
  ColorProps,
  BorderProps,
  PositionProps,
    BackgroundProps {
  children?: React.ReactNode;
  testId?: string;
  src?: string;
  alt?: string;
  as?: ElementType<any>
}

export const Div = styled.div<StyledComponentDto>`
  ${fluid(flexbox)}
  ${fluid(space)}
  ${fluid(layout)}
  ${fluid(background)}
  ${fluid(grid)}
  ${fluid(border)}
  ${fluid(color)}
  ${fluid(position)}
`;

export const Flex= styled(Div)<StyledComponentDto>``;

Flex.defaultProps = {
  as: 'div',
  display: 'flex',
};


