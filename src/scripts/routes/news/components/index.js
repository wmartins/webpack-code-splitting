import React from 'react';

class News extends React.Component {
    render() {
        return (
            <div className="container p2">
                <h1 className="m0 mb2">News</h1>
                <p>I am being displayed correctly!</p>
                <p>You can go back to home again!</p>
                <p>Please notice that nothing will be loaded.</p>
            </div>
        );
    }
}

module.exports = News;
