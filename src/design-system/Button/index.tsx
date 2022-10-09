import styled from '@emotion/styled';
import React, { useMemo } from 'react';
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
  grid,
  GridProps,
  layout,
  LayoutProps,
  PositionProps,
  position,
  SizeProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

interface ButtonComponentDto
  extends SpaceProps,
  ColorProps,
  LayoutProps,
  GridProps,
  BorderProps,
  TypographyProps,
  SizeProps,
  PositionProps,
  BackgroundProps {
  children?: React.ReactNode;
}

const ButtonStyled = styled.button<ButtonComponentDto>`
  font-family: 'Greback Grotesque Fat', sans-serif;
  text-edge: cap alphabetic;
  leading-trim: both;
  text-transform: uppercase;
  padding-top: ${({ theme }) => theme.space[3]};
  padding-bottom: ${({ theme }) => theme.space[2]};
  padding-left: ${({ theme }) => theme.space[4]};
  padding-right: ${({ theme }) => theme.space[4]};
  cursor: pointer;
  ${fluid(position)}
  ${fluid(color)}
  ${fluid(typography)}
  ${fluid(border)}
  ${fluid(flexbox)}
  ${fluid(space)}
  ${fluid(layout)}
  ${fluid(background)}
  ${fluid(grid)}
`

const PrimaryButtonStyled = styled(ButtonStyled) <ButtonComponentDto>``
PrimaryButtonStyled.defaultProps = {
  backgroundColor: 'primary',
  color: 'white',
};

const SecondaryButtonStyled = styled(ButtonStyled) <ButtonComponentDto>``
SecondaryButtonStyled.defaultProps = {
  backgroundColor: 'white',
  color: 'primary',
};

enum TypeEnum {
  primary = 'primary',
  secondary = 'secondary'
}

type ButtonMappingType = {
  [Field in TypeEnum]?: any
}

const buttonMapping: ButtonMappingType = {
  [TypeEnum.primary]: PrimaryButtonStyled,
  [TypeEnum.secondary]: SecondaryButtonStyled,
}

interface ButtonDto {
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'primary' | 'secondary';
  isLoading?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
  testId?: string;
}

const Button = ({
  children,
  type = 'primary',
  isLoading,
  buttonType,
  onClick, 
  ...rest
}: ButtonComponentDto & ButtonDto) => {
  const Btn = useMemo(() => buttonMapping[type], [type])

  const props = useMemo(() => ({
    ...rest,
    onClick: !isLoading ? onClick : undefined,
    type: buttonType,
  }), [rest, buttonType, isLoading, onClick])

  return (
    <Btn
      display="flex"
      alignItems="center"
      justifyContent="center"
      border='1px solid'
      borderColor='white'
      borderRadius={15}
      fontSize={20}
      fontWeight={'600'}
      {...props}
    >
      {isLoading && 'loading'}
      {!isLoading && children}
    </Btn>
  );
}

export default Button;
