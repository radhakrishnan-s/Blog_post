import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactDOM from 'react-dom';
import Content from './Content' 
export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { modal: false, title: '', category: '', content: '' };
        this.toggle = this.toggle.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getCategory = this.getCategory.bind(this);
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
        console.log(this.state.title);
    }
    getCategory(event: any) {
        this.setState({ category: event.target.value });
    }
    getContent(event: any) {
        this.setState({ content: event.target.value });
    }
    handleSubmit(event: any) {
        event.preventDefault();    
        var thisIsMyCopy = (<p>copy copy copy <strong>strong copy</strong></p>);

        ReactDOM.render(<div className="content">{thisIsMyCopy}</div>, document.getElementById('content_container'));  
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