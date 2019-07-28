import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class CreateBlogPost extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { modal: false, title: '', category: '', tag: '', content: '' };

    this.toggle = this.toggle.bind(this);
    this.getTitle = this.getTitle.bind(this);
    this.getCategory = this.getCategory.bind(this);
    this.getTag = this.getTag.bind(this);
    this.getContent = this.getContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  getTitle(event: any) {
    this.setState({ title: event.target.value });
  }
  getCategory(event: any) {
    this.setState({ category: event.target.value });
  }
  getTag(event: any) {
    this.setState({ tag: event.target.value });
  }
  getContent(event: any) {
    this.setState({ content: event.target.value });
  }
  handleSubmit(event: any) {
    event.preventDefault();
  }


  render() {
    return (

      <div>
        <Button className="btn btn-primary" onClick={this.toggle}>React Modal</Button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>Create a Blog post</ModalHeader>
            <ModalBody>
              <label>Blog Title:</label>
              <input type="text" value={this.state.title} onChange={this.getTitle} className="form-control" />
              <label>Blog Category:</label>
              <input type="text" value={this.state.category} onChange={this.getCategory} className="form-control" />
              <label>Blog Tag:</label>              
              <input type="text" value={this.state.tag} onChange={this.getTag} className="form-control" />
              <label>Blog Content:</label>
              <textarea className="form-control" id="message-text"></textarea>
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>

    );
  }
}
