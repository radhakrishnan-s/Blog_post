import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactDOM from 'react-dom';
import Delete from '../Images/Delete.jpg';
import handleClick from './Content'

export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { modal: false, title: '', category: '', content: '' };
        this.toggle = this.toggle.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.getContent = this.getContent.bind(this);
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
    getContent(event: any) {
        this.setState({ content: event.target.value });
    }
    handleSubmit = () => {
        ReactDOM.render(<div className="hover col-md-4 bg-light d-inline-block" data-title={this.state.title} data-blogcontent={this.state.blogcontent} data-category={this.state.category} data-date={this.state.date}>
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                {this.state.title}
            </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted" >{this.state.category}</h6>
                <p className="card-text">{this.state.content}</p>
                <div className="d-flex mb-3">
                    <div className="mr-auto p-2">
                        <small className="text-muted">{this.state.date}</small>
                    </div>
                    <div className="p-2">
                        <div className="hover text-muted"><img src={Delete} className="delete" alt="Delete" /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>, document.getElementById('content_container'));
    this.toggle();
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top box-shadow">
                    <a className="navbar-brand text-white">Bloggers</a>
                    <div className="navbar-collapse">
                        <div className="navbar-nav ml-auto">
                            <div className="hover navbar-text text-white" onClick={this.toggle}>Add new blog</div>
                        </div>
                    </div>
                </nav>
                <Modal isOpen={this.state.modal}>
                    <form onSubmit={this.handleSubmit}>
                        <ModalHeader>Create a Blog post</ModalHeader>
                        <ModalBody>
                            <label>Blog Title:</label>
                            <input type="text" className="form-control" value={this.state.title} onChange={this.getTitle} required />
                            <label>Blog Category:</label>
                            <input type="text" className="form-control" value={this.state.category} onChange={this.getCategory} required />
                            <label>Blog Content:</label>
                            <textarea className="form-control" value={this.state.value} onChange={this.getContent} required></textarea>
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