import React, {FC} from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import image from '../images/image-hero-desktop.png';
import { Svg } from './Svg';

interface BodyProps {

}

const StyledBody = styled.body`
  padding: 1em 8.5em;
  display: flex;
`;

const Info = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 5em;
`;

const Image = styled.img.attrs({src: image, alt: 'main-image'})`
  width: 450px;
  height: 600px;
`;

const Title = styled.h1`
  color: var(--color-black);
  font-size: 90px;
  margin: 0;
`;

const Description = styled.h3`
  width: 50%;
  margin: 1em 0 2em 0;
  color: var(--color-gray);
  font-size: var(--fs);
  font-weight: var(--fs-sm);
  line-height: 1.5;
`;

const Partners = styled.div`
  margin: 5em 0;
  display: flex;
  gap: 2em;

  & > svg {
    cursor: pointer;
    &:hover {
      & > path {
        transition: fill linear 0.5s;
        fill: var(--color-black);
      }
    }
  }
  
`;

export const Body:FC<BodyProps> = (params) => {
  return (
  <StyledBody>
    <Info>
      <Title>Make</Title>
      <Title>remote work</Title>
      <Description>
        Get your team in sync, no matter your location. Streamline processes, 
        create team rituals, and watch productivity soar.
      </Description>
      <Button title='Learn more' bold outLined lineColor='var(--color-black)' color='var(--color-white)' bgColor='var(--color-black)'/>
      <Partners>
        <Svg id='DataBiz'/>
        <Svg id='Audio'/>
        <Svg id='Meet'/>
        <Svg id='Maker'/>
      </Partners>
    </Info>
    <Image />
  </StyledBody>
  )
};
