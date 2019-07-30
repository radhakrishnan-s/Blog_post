import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { modal: false, title: '', category: '', content: '', linkname: 'Add new blog' };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top box-shadow">
                    <a className="navbar-brand text-white">Bloggers</a>
                    <div className="navbar-collapse">
                        <div className="navbar-nav ml-auto">
                            <a className="navbar-text text-white" onClick={this.toggle}>{this.state.linkname}</a>
                        </div>
                    </div>
                </nav>
                <Modal isOpen={this.state.modal}>
                    <form>
                        <ModalHeader>Create a Blog post</ModalHeader>
                        <ModalBody>
                            <label>Blog Title:</label>
                            <input type="text" className="form-control" required/>
                            <label>Blog Category:</label>
                            <input type="text" className="form-control" required/>
                            <label>Blog Content:</label>
                            <textarea className="form-control" id="message-text" required></textarea>
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