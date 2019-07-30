import * as React from 'react';

interface description {
    description_heading?: string;
    description?: string;
}

const Description: React.FC<description> = (props: description) => (
    <section className="jumbotron text-center">
        <div className="container">
            <h3 className="jumbotron-heading">{props.description_heading}</h3>
            <p className="lead text-muted">{props.description}</p>
        </div>
    </section>
);

Description.defaultProps = {
    description_heading: 'Bloggers for Life',
    description: 'Connecting ideas and people!!!'
};

export default Description;