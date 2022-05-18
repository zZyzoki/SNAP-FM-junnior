import { FC } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { ButtonList, IListItem } from './ButtonList';
import { Svg } from './Svg';

interface HeaderProps {

}

const Wrapper = styled.header`
  display: flex;
  padding: 2em 0;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;


const Navigator = styled.div`
  display: flex;
  gap: 1em;

  align-items: center;
`

export const Header:FC<HeaderProps> = (params) => {

  const FeaturesListItems:IListItem[] = [
    {
      title: "Todo List",
      icon: <Svg id="Todo"/>
    },
    {
      title: "Calendar",
      icon: <Svg id="Calendar"/>
    },
    {
      title: "Reminder",
      icon: <Svg id="Reminder"/>
    },
    {
      title: "Planning",
      icon: <Svg id="Planning"/>
    }
  ];

  const CompanyListItems:IListItem[] = [
    {
      title: "History"
    },
    {
      title: "Our Teams"
    },
    {
      title: "Blog"
    },
  ];

  return <>
  <Wrapper>
    <Navigator>
      <Svg id='Logo' />
      <ButtonList style={{marginLeft: 20}} items={FeaturesListItems} title="Features" />
      <ButtonList items={CompanyListItems} title="Company" />
      <Button title="Careers"/>
      <Button title="About"/>
    </Navigator>
    <Navigator>
      <Button title="Login"/>
      <Button title="Register" outLined={true}/>
    </Navigator>
  </Wrapper>
  </>;
};
