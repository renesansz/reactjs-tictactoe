import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

/**
 * Part 1: Basics of React DOM
 * ---------------------------
 * Basic React script anatomy.
 */
/*
const user = {
    firstName: 'Renemari',
    lastName: 'Padillo'
};

function formatName(user) {
    return `${user.firstName} ${user.lastName}`
}

// This is the basic way to render React into the page
ReactDOM.render(
    <h1>Hello, {formatName(user)}</h1>,
    document.getElementById('root')
);
*/

/**
 * Part 2: Advance React DOM
 * -------------------------
 * Some advance useage/topic in regards with React DOM.
 */
/*
const user = {
    firstName: 'Renemari',
    lastName: 'Padillo'
};

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, stranger things!</h1>;
}

// For this example we'll render a real-time clock display on the page
function render() {
    // JSX can be stored on a variable.
    // In this case, we store it inside element
    const element = (
        <div>
            {getGreeting(user)}
            <h2>It is now {new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(
        element,
        document.getElementById('root')
    );

    // This is where the magic happens, every second the page updates the content
    setInterval(render, 1000);
}

render();
*/

/**
 * Part 3: JSX Basics
 * ------------------
 * Basic anatomy of JSX Component.
 */
/*
// JSX is neither a string nor HTML/XML
let component = <h1 className="greeting">Hello there!</h1>;

// Still the same above
let component = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello there!'
);

ReactDOM.render(
    component,
    document.getElementById('root')
);

const user = {
    firstName: 'Renemari',
    lastName: 'Padillo',
};

// It's awesome how we can call variable/function inside the JSX by using curly braces {}
let anotherComponent = <h1>Hello, {getName(user)}</h1>;

function getName(user) {
    return `${user.firstName} ${user.lastName}`;
}

ReactDOM.render(
    anotherComponent,
    document.getElementById('root')
);
*/

/**
 * Part 4.1: Intro to React Components (Function based component)
 * ---------------------------------
 * Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
 * Conceptually, components are like JavaScript functions.
 * They accept arbitrary inputs (called "props") and return React elements describing what should appear on the screen.
 */
/*
/**
 * @function Welcome
 * 
 * @description Defines a <Welcome> DOM component.
 * 
 * @property props {Object} A component attribute.
 * 
 * @return {JSX}
 */
/*
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
    <Welcome name="Rene" />,
    document.getElementById('root')
);
*/

/**
 * Part 4.2: Intro to React Components (Class based component)
 * ---------------------------------
 * On this part we'll introduce ReactDOM.Component
 */
/*
class Welcome extends React.Component {
    render() {
        // On this example, the component property is now binded to this
        return <h1>Hello, {this.props.name}</h1>;
    }
}

ReactDOM.render(
    <Welcome name="Rene" />,
    document.getElementById('root')
);
*/

/**
 * Part 4.3: Components and Props
 * -----------------------------------
 * Advance usage of React components by using properties.
 */
// <Avatar />
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name} />
    );
}

// <AuthorInfo />
function AuthorInfo(props) {
    return (
        <div className="AuthorInfo">
            <Avatar user={props.author} />
            <div className="AuthorInfo-name">
                {props.author.name}
            </div>
        </div>
    );
}

// <Comment />
function Comment(props) {
    function formatDate(date) {
        return date.toLocaleTimeString();
    };

    return (
        <div className="Comment">
            <AuthorInfo author={props.comment.author} />
            <div className="Comment-text">
                {props.comment.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.comment.date)}
            </div>
        </div>
    );
}

class App extends React.Component {
    render() {
        const comment = {
            author: {
                name: 'George Tilap',
                avatarUrl: 'http://pm1.narvii.com/6342/77c1f42a96ae9e3628db61cbf25658b896f9b724_128.jpg'
            },
            text: 'Hello there!',
            date: new Date()
        };

        return <Comment comment={comment} />;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
