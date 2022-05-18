import './App.css';
import styled from 'styled-components';
import { Header } from './components/Header';
import { Body } from './components/Body';

const Wrapper = styled.div`
  background: var(--color-white);
  color: var(--color-gray);
  padding: 0 3em;
`;


function App() {
  return (
      <Wrapper>
        <Header />
        <Body />
      </Wrapper>
  );
}

export default App;
