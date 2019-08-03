import * as React from 'react';
import * as data from './ContentData.json';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Delete from '../Images/Delete.jpg';
import Header from './Header'

export default class Content extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { numChildren: 0, modal: false, title: '', category: '', content: '', date: '' };
        this.toggle = this.toggle.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onAddChild = this.onAddChild.bind(this);
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleClick(event: any) {
        this.toggle();
        this.setState({
            title: event.currentTarget.dataset.title,
            category: event.currentTarget.dataset.category,
            content: event.currentTarget.dataset.blogcontent,
            date: event.currentTarget.dataset.date,
        });
    }
    // componentDidMount() {
    //     this.props.onRef(this)
    // }
    // componentWillUnmount() {
    //     this.props.onRef(undefined)
    // }

    onAddChild = () => {
        //event.preventDefault();
        this.setState({
            numChildren: this.state.numChildren + 1
        });
        this.toggle();
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
            <div className="container-fluid" id="container">
                {data.contentdata.map(item => (
                    <div key={item.title} className="col-md-4 bg-light d-inline-block">
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                {item.title}
                            </div>
                            <div className="card-body">
                                <h5 className="card-subtitle mb-2 text-muted" >{item.category}</h5>
                                <p className="card-text">{item.blogcontent}</p>
                                <h6 className="hover" onClick={this.handleClick} data-title={item.title} data-blogcontent={item.blogcontent} data-category={item.category} data-date={item.date}>View the content...</h6>
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
                                    <input type="text" className="form-control" value={this.state.title} readOnly />
                                    <label>Category:</label>
                                    <input type="text" className="form-control" value={this.state.category} readOnly />
                                    <label>Content:</label>
                                    <textarea className="form-control" id="message-text" readOnly>{this.state.content}</textarea>
                                    <label>Date Created:</label>
                                    <input type="text" className="form-control" value={this.state.date} readOnly />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" onClick={this.toggle}>Close</Button>
                                </ModalFooter>
                            </form>
                            <a href="#" onClick={this.onAddChild}>Add Another Child Component</a>
                        </Modal>
                    </div>
                ))}
                {children}
                {/* <Content updatecomment = {this.props.onAddChild}/> */}
            </div>
        );
    }
}