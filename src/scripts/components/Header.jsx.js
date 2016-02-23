import React from 'react';
import { Link } from 'react-router';

const linkClasses = [
    'inline-block',
    'p2',
    'aqua'
].join(' ');

class Header extends React.Component {
    render() {
        return (
            <div className="bg-black">
                <div className="container px2">
                    <nav className="mxn2">
                        <Link
                            className={linkClasses}
                            to="/">Home</Link>
                        <Link
                            className={linkClasses}
                            to="news">News</Link>
                        <Link
                            className={linkClasses}
                            to="about">About (I will load some CSS)</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
