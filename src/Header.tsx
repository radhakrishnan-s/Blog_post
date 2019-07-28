import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { modal: false, title: '', category: '', tag: '', content: '', linkname: 'Add new blogs' };
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
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark box-shadow">
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
                            <input type="text" className="form-control" />
                            <label>Blog Category:</label>
                            <input type="text" className="form-control" />
                            <label>Blog Tag:</label>
                            <input type="text" className="form-control" />
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