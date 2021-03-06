import React, { Component } from 'react';
import { Header, Container, Menu } from 'semantic-ui-react'

import 'app/layout/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header inverted  as="h1">Project Mini-mek</Header>
        </header>
        <Container>
          <Menu tabular size="massive">
            <Menu.Item name="unitInfo" active> Unit Info</Menu.Item>
            <Menu.Item name="pilots" active={false}>Pilots</Menu.Item>
            <Menu.Item name="mechs" active={false}>Mechs  </Menu.Item>
            <Menu.Item name="unitOrganization" active={false}>Unit Organization</Menu.Item>
          </Menu>
        </Container>
        </div>
    );
  }
}

export default App;
