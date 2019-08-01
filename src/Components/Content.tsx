import * as React from 'react';
import * as data from './ContentData.json';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Delete from '../Images/Delete.jpg';

export default class Content extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { modal: false, title: '', category: '', content: '', date: '' };
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleClick(event: any) {
        this.toggle();
         this.setState({ 
             title: event.currentTarget.dataset.title ,
             category: event.currentTarget.dataset.category,
             content: event.currentTarget.dataset.blogcontent , 
             date: event.currentTarget.dataset.date,
         });
     }
    render() {
        return (
            <div className="container-fluid" id="content_container">
                {data.contentdata.map(item => (
                    <div key={item.title} className="hover col-md-4 bg-light d-inline-block" data-title={item.title} data-blogcontent={item.blogcontent} data-category={item.category} data-date={item.date} onClick={this.handleClick}>
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                {item.title}
                            </div>
                            <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted" >{item.category}</h6>
                                <p className="card-text">{item.blogcontent}</p>
                                <div className="d-flex mb-3">
                                    <div className="mr-auto p-2">
                                        <small className="text-muted">{item.date}</small>
                                    </div>
                                    <div className="p-2">
                                        <div className="hover text-muted"><img src={Delete} className="delete" alt="Delete" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Modal isOpen={this.state.modal}>
                            <form>
                                <ModalHeader>Blog post</ModalHeader>
                                <ModalBody>
                                    <label>Title</label>
                                    <input type="text" className="form-control" value={this.state.title} readOnly/>
                                    <label>Category:</label>
                                    <input type="text" className="form-control" value={this.state.category} readOnly/>
                                    <label>Content:</label>
                                    <textarea className="form-control" id="message-text" readOnly>{this.state.content}</textarea>
                                    <label>Date Created:</label>
                                    <input type="text" className="form-control" value={this.state.date} readOnly/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={this.toggle}>Close</Button>
                                </ModalFooter>
                            </form>
                        </Modal>
                    </div>
                ))}
            </div>
        );
    }
}