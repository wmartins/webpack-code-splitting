import React from 'react';

class Code extends React.Component {
    render() {
        return (
            <code
                className="round bg-gray"
                style={{
                    padding: '1px 5px'
                }}>
                {this.props.children}
            </code>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <div className="container p2">
                <section>
                    <h1 className="m0 mb2">Webpack Code Splitting</h1>
                    <p>I'm here to demonstrate a simple experiment about webpack's code splitting.</p>
                    <p>Before we get started, open your <b>developer tools</b> (F12) in network tab to see what's going on!</p>
                </section>
                <hr />
                <section>
                    <h2 className="m0 mb2">Objectives</h2>
                    <ol>
                        <li>Be able to load a dynamic part of application (both CSS and JavaScript files)</li>
                        <li>Be able to extract JavaScript code</li>
                        <li>Be able to extract CSS code (it must not be inside JavaScript code)</li>
                    </ol>
                </section>
                <section>
                    <h2 className="m0 mb2">Demonstration</h2>
                    <article>
                        <h3>1. Splitted JavaScript</h3>
                        <ol>
                            <li>Click in <Code>News</Code></li>
                            <li>Check that <Code>3.index.js</Code> was loaded</li>
                            <li>Check that news page is displayed correctly</li>
                        </ol>
                    </article>
                    <article>
                        <h3>2. Splitted JavaScript & CSS</h3>
                        <ol>
                            <li>Click in <Code>About</Code></li>
                            <li>Check that <Code>2.index.js</Code> and <Code>about.css</Code> were loader</li>
                            <li>Check that font color is now red</li>
                            <li>Click in <Code>Home</Code> again and then click in <Code>About</Code> again</li>
                            <li>Check that nothing else is loaded</li>
                        </ol>
                    </article>
                </section>
            </div>
        );
    }
}

export default Home;
