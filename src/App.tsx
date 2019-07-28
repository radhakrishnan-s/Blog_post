import * as React from 'react';
import Header from './Header';
import Description from './Description';
import Content from './Content';
import Footer from './Footer';
import CreateBlogPost from './CreateBlogPost';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <main role="main">
        <Description/>
        <Content/>
        <CreateBlogPost/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
