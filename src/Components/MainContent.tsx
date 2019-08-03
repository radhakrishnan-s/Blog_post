import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Delete from '../Images/Delete.jpg';
import * as data from './ContentData.json';

export default class Header extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = { blogcount: 0, readOnly: false, hidden: false, submithidden: false, required: false, modal: false, blogtitle: '', title: '', category: '', content: '', date: '' };
        this.toggle = this.toggle.bind(this);
        this.getTitle = this.getTitle.bind(this);
        this.getCategory = this.getCategory.bind(this);
        this.getContent = this.getContent.bind(this);
        this.viewBlogPost = this.viewBlogPost.bind(this);
        this.saveBlogPost = this.saveBlogPost.bind(this);
        this.addBlogPost = this.addBlogPost.bind(this);
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

    viewBlogPost(event: any) {
        this.toggle();
        this.setState({
            title: event.currentTarget.dataset.title,
            category: event.currentTarget.dataset.category,
            content: event.currentTarget.dataset.blogcontent,
            date: event.currentTarget.dataset.date,
            readOnly: true,
            required: false,
            hidden: false,
            submithidden: true
        });
    }

    addBlogPost(event: any) {
        this.toggle();
        this.setState({
            title: '',
            category: '',
            content: '',
            date: '',
            readOnly: false,
            required: true,
            hidden: true,
            submithidden: false
        });
    }

    saveBlogPost(){
        this.setState({
            blogcount: this.state.blogcount + 1
        });
        this.toggle();
    }

    render() {
        const newBlog = [];

        for (var i = 0; i < this.state.blogcount; i++) {
            newBlog.push(<div className="hover col-md-4 bg-light d-inline-block">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                    {this.state.title}
                 </div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted" >{this.state.category}</h6>
                        <p className="card-text">{this.state.content}</p>
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
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top box-shadow">
                    <div className="navbar-brand text-white">Bloggers</div>
                    <div className="navbar-collapse">
                        <div className="navbar-nav ml-auto">
                            <div className="hover navbar-text text-white" onClick={this.addBlogPost}>Add new blog</div>
                        </div>
                    </div>
                </nav>
                {data.contentdata.map(item => (
                    <div key={item.title} className="col-md-4 bg-light d-inline-block">
                        <div className="card mb-4 box-shadow">
                            <div className="card-header">
                                {item.title}
                            </div>
                            <div className="card-body">
                                <h5 className="card-subtitle mb-2 text-muted" >{item.category}</h5>
                                <p className="card-text">{item.blogcontent}</p>
                                <h6 className="hover" onClick={this.viewBlogPost} data-title={item.title} data-blogcontent={item.blogcontent} data-category={item.category} data-date={item.date}>View the content...</h6>
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
                            <form onSubmit={this.saveBlogPost}>
                                <ModalHeader>Blog post</ModalHeader>
                                <ModalBody>
                                    <label>Title</label>
                                    <input type="text" className="form-control" value={this.state.title} onChange={this.getTitle} readOnly={this.state.readOnly} required={this.state.required} />
                                    <label>Category:</label>
                                    <input type="text" className="form-control" value={this.state.category} onChange={this.getCategory} readOnly={this.state.readOnly} required={this.state.required} />
                                    <label>Content:</label>
                                    <textarea className="form-control" id="message-text" onChange={this.getContent} readOnly={this.state.readOnly} required={this.state.required}>{this.state.content}</textarea>
                                    <label hidden={this.state.hidden}>Date Created:</label>
                                    <input type="text" className="form-control" value={this.state.date} readOnly={this.state.readOnly} required={this.state.required} hidden={this.state.hidden} />
                                </ModalBody>
                                <ModalFooter>
                                    <input type="submit" value="Submit" color="primary" className="btn btn-primary" hidden={this.state.submithidden} />
                                    <Button color="danger" onClick={this.toggle}>Close</Button>
                                </ModalFooter>
                            </form>
                            <a href="#" onClick={this.saveBlogPost}>Add Another Child Component</a>
                        </Modal>
                    </div>
                ))}
                {newBlog}
            </div>
        );
    }
}