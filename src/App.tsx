import React from 'react';
/*import logo from './logo.jpg';*/
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark box-shadow">
        <a className="navbar-brand" href="#">Bloggers</a>

        {/*
  <div className="navbar-text text-white">
  The Bloggers Den
  </div> 
  <span className="border-light ">
    <p className="navbar-text bg-dark text-white">Connecting ideas and people – how talk can change our lives!!!</p>
  </span>
  <div className="navbar-collapse">
      <div className="navbar-nav ml-auto">
          <span className="navbar-brand">Connecting ideas and people – how talk can change our lives!!!</span>
      </div>
    </div>*/}
      </nav>
      <main role="main">
        <section className="jumbotron text-center">
          <div className="container">
            <h3 className="jumbotron-heading">Bloggers for Life</h3>
            <p className="lead text-muted">Connecting ideas and people!!!</p>
          </div>
        </section>
        <div className="col-md-4 py-5 bg-light d-inline-block">
          <div className="card mb-4 box-shadow">
          <div className="card-header">
            Card title
          </div>
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 bg-light d-inline-block">
          <div className="card mb-4 box-shadow">
          <div className="card-header">
            Card title
          </div>
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 bg-light d-inline-block">
          <div className="card mb-4 box-shadow">
          <div className="card-header">
            Card title
          </div>
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 py-5 bg-light d-inline-block">
          <div className="card mb-4 box-shadow">
          <div className="card-header">
            Card title
          </div>
            <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="container-fluid d-flex justify-content-center bg-dark text-white">
        Bloggers 2019 &copy;
  </div>
    </div>
  );
}

export default App;
