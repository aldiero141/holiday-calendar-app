import Calendar from "./components/Calendar";
import GlobalStyle from './theme/GlobalStyle';
import styled from 'styled-components';

const Header = styled.div`
  padding: 1em;
  background-color: #2C3E50;
  color: #ccc;
  margin-top: 0;
  font-weight: 600;
  font-size: 1.25em;
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Body = styled.div`
  padding: 4em 8em;
  color: #333;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 2em 4em;
    font-size: 0.625em
  }
  
`;

function App() {
  return (
    
    <AppWrapper>
      <GlobalStyle/>
      <Header>
        Public Holiday Calendar
      </Header>
      <Body>
        <Calendar/>
      </Body>
    </AppWrapper>
  );
}

export default App;
