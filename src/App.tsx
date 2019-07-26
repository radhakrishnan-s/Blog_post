import React from 'react';
import logo from './logo.jpg';
import './App.css';

const App: React.FC = () => {
  return (
<div>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark border-light">
  <a className="navbar-brand" href="#"><img src={logo} className="logo" alt="logo"/></a>

  {/* <div className="navbar-text text-white">
  The Bloggers Den
  </div> 
  <span className="border-light ">
    <p className="navbar-text bg-dark text-white">Connecting ideas and people – how talk can change our lives!!!</p>
  </span>*/}
  <div className="navbar-collapse">
      <div className="navbar-nav ml-auto">
          <span className="nav-item text-white">Connecting ideas and people – how talk can change our lives!!!</span>
      </div>
    </div>
  </nav>
  <section>test1</section>
  <div className="card card-footer text-muted border-light bg-dark text-white">
    Blogging for new bloggers 2019 &copy;
  </div>
</div>
  );
}

export default App;
