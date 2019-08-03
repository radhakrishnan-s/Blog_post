import * as React from 'react';
import MainContent from './Components/MainContent';
import Description from './Components/Description';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './Styles/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Description />
        </header>
        <main role="main">
          {/* <Content /> */}
          <MainContent />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
