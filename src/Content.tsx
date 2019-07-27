import * as React from 'react';

const content = [
    {
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        blogcontent: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        date: '20-10-2018'
    },
    {
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        blogcontent: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        date: '05-11-2018'
    },
    {
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        blogcontent: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        date: '17-12-2018'
    },
    {
        title: 'Title 4',
        subtitle: 'Subtitle 4',
        blogcontent: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
        date: '21-01-2019'
    },
];

const Content = () => (
    <div>
    {content.map(item => (
    <div key={item.title} className="col-md-4 py-5 bg-light d-inline-block">
        <div className="card mb-4 box-shadow">
            <div className="card-header">
            {item.title}
          </div>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{item.subtitle}</h6>
                <p className="card-text">{item.blogcontent}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{item.date}</small>
                </div>
            </div>
        </div>
    </div>
    ))}
    </div>
);

export default Content;