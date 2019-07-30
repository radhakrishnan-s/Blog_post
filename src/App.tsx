import * as React from 'react';
import Header from './Components/Header';
import Description from './Components/Description';
import Content from './Components/Content';
import Footer from './Components/Footer';
import './Styles/App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <main role="main">
          <Description />
          <Content />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
