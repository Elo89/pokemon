import styled from '@emotion/styled';
import React, {FC} from 'react';
// @ts-ignore
import fluid from "fluid-system";
import {
  space,
  SpaceProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  layout,
  LayoutProps,
  shadow,
  ShadowProps
} from 'styled-system';

interface TypographyComponentDto
  extends SpaceProps,
    ColorProps,
    LayoutProps,
    ShadowProps,
    TypographyProps {
  children?: React.ReactNode;
  as?: string;
}

export const Text: FC<any> = styled.p`
  ${fluid(space)}
  ${fluid(typography)}
  ${fluid(color)}
  ${fluid(layout)}
  ${fluid(shadow)}
`;

export const PokemonName: FC<TypographyComponentDto> = styled(Text)``;

PokemonName.defaultProps = {
  as: 'h3',
  fontFamily: "Pokemon solid",
  mt: 0,
  fontSize: ['2.5rem', '3rem'],
  lineHeight: ['2.5rem', '3rem'],
  textShadow: `0 4px black`,
};

export const Text1: FC<TypographyComponentDto> = styled(Text)``;

Text1.defaultProps = {
  as: 'p',
  fontSize: 'lg',
  lineHeight: 'lg',
};