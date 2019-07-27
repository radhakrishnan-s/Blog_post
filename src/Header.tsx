import * as React from 'react';

interface header {
    name?: string;
    linkname?: string;
}

const Header: React.FC<header> = (props: header) => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark box-shadow">
        <a className="navbar-brand text-white">{props.name}</a>
        <div className="navbar-collapse">
            <div className="navbar-nav ml-auto">
                <a className="navbar-text text-white">{props.linkname}</a>
            </div>
        </div>
    </nav>
);

Header.defaultProps = {
    name: 'Bloggers',
    linkname: 'Add new blogs'
};

export default Header;