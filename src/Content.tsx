import * as React from 'react';
import Delete from './Delete.jpg';
import contentdata from './ContentData';

const Content = () => (
    <div>
        {contentdata.map(item => (
            <div key={item.title} className="col-md-4 bg-light d-inline-block">
                <div className="card mb-4 box-shadow">
                    <div className="card-header">
                        {item.title}
                    </div>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
                        <p className="card-text">{item.blogcontent}</p>
                        <div className="d-flex mb-3">
                            <div className="mr-auto p-2">
                                <small className="text-muted">{item.date}</small>
                            </div>
                            <div className="p-2">
                                <a className="text-muted"><img src={Delete} className="delete" alt="Delete"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Content;