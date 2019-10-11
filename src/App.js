import React from 'react';
import Header from './components/Header';
import './App.css';
import styled from 'styled-components';

import NewDate from './components/NewDate';
//import { loadTheme } from 'office-ui-fabric-react';

// loadTheme({
//   palette: {
//     themePrimary: '#005b70',
//     themeLighterAlt: '#000404',
//     themeLighter: '#000f12',
//     themeLight: '#001b22',
//     themeTertiary: '#003743',
//     themeSecondary: '#005163',
//     themeDarkAlt: '#0d6a7e',
//     themeDark: '#237e92',
//     themeDarker: '#4d9daf',
//     neutralLighterAlt: '#eaf0f2',
//     neutralLighter: '#e6ecee',
//     neutralLight: '#dde3e4',
//     neutralQuaternaryAlt: '#ced3d4',
//     neutralQuaternary: '#c4cacb',
//     neutralTertiaryAlt: '#bdc2c3',
//     neutralTertiary: '#111111',
//     neutralSecondary: '#171616',
//     neutralPrimaryAlt: '#1d1c1b',
//     neutralPrimary: '#323130',
//     neutralDark: '#282726',
//     black: '#2d2c2c',
//     white: '#f1f7f8',
//   }
// });


const Button = styled.button`
  background: lightblue;
  padding: 15px;
  margin: 15px;
  color: black;
`;

const Success = styled(Button)`
  background: lightgreen;
`;

const Error = styled(Button)`
  background: lightcoral;
  font-weight: bold;
`;

const Paragraph = styled.p`
  background: green;
`;

const inputBg = 'yellow';
const Input = styled.input`
  background: ${inputBg};
  color: black;
`;

const Footer = styled('Footer')`
  background: #65a9d7;
  font-size: 26px;
`;


function App() {
  return (
    <div className="App">
      <Header />
      <div className="Main">
        {/* <NewDate /> */}
        <div>
          <Button>Basic </Button>
            <Success>Success Message</Success>
            <Error>Error Message</Error>
        </div>
        <Paragraph>Read ME</Paragraph>
        <Input
          placeholder="Type in me"
        />
      </div>
      <Footer>I'm a footer</Footer>
    </div>
  );
}

export default App;
