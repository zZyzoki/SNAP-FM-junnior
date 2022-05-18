import React, { FC, useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from './Button';
import { Svg } from './Svg';
import {motion, AnimatePresence} from 'framer-motion';

export interface IListItem {
  icon?: React.ReactNode;
  title: string;
}

interface ButtonListProps {
  title: string;
  items: IListItem[];
  children?: React.ReactNode;
  style?: any;
}


const List = styled.ul`
  height: fit-content;
  width: max-content;
  margin: 0;
  margin-left: -8em;
  padding: 1em;
  background: white;
  position: absolute;
  top: 5em;

  border-radius: 0.5em;
  box-shadow: -5px 4px 89px 0px rgba(34, 60, 80, 0.2);
`;

const ListItem = styled.li`
  padding: 0.5em;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: var(--color-black);
  }
  display: flex;
  align-items: center;
  gap: 0.5em;

  & > Svg {
    width: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: relative;
  right: 17px;
  bottom: 2px;
`;

const Title = styled.h3`
  padding: 0;
  margin: 0;
  font-weight: var(--fs-sm);
  font-size: 15px;
`

export const ButtonList:FC<ButtonListProps> = ({children, items, title, style}) => {

  const [isActive, setIsActive] = useState(false);

  const clickHandler = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive])

  const generateList = () => {
    return items.map(item => {
      if(item.icon) {
        return (
          <ListItem>
            {item.icon}
            <Title>{item.title}</Title>
          </ListItem>
        )
      }
      return (
        <ListItem>
          <Title>{item.title}</Title>
        </ListItem>
      )
    })
  }

  return (
    <Wrapper style={style}>
      <Button title={title} list onClick={clickHandler}/>
      <IconWrapper onClick={clickHandler}>
        <Svg id={isActive ? "ArrowUp" : "ArrowDown"} />
      </IconWrapper>
      {isActive && 
        <AnimatePresence>
          <motion.div 
            initial={{opacity: 0, height: 0}}
            transition={{ duration: 0.5 }}
            animate={{opacity: 1, height: 'auto'}}
            >
            <List>{generateList()}</List>
          </motion.div>
        </AnimatePresence>}
    </Wrapper>
  );
}