import * as React from 'react';
import Delete from '../Images/Delete.jpg'
import Content from './Content'

export default class AppComponent extends React.Component {
  state = {
    numChildren: 0
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
  
  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<div className="hover col-md-4 bg-light d-inline-block">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            test1
                 </div>
          <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted" >test2</h6>
            <p className="card-text">test3</p>
            <div className="d-flex mb-3">
              <div className="mr-auto p-2">
                <small className="text-muted">test4</small>
              </div>
              <div className="p-2">
                <div className="hover text-muted"><img src={Delete} className="delete" alt="Delete" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>);
    };

    return (
      <div id="children-pane">
        <p><a href="#" onClick={this.onAddChild}>Add Another Child Component</a></p>
        {children}
      </div>
    );
  }
}