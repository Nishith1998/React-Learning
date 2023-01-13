# React

> **React is a JavaScript library for building user interfaces.**

Mobile apps and desktop apps feel very **Reactive**: things happen instantly, you don't wait for new pages to load or actions to start.

Traditionally, in web apps, you click a link and wait for a new page to load. You click a button and wait for some action to complete.

> **</>** --request--> Server --html--> **</>**

### </> (Client side JS page)
JavaScript runs in the browser - on the loaded page

You can manipulate the HTML structure (DOM) of the page.

We don't need to request a new HTML page using JavaScript itself because we can present(manipulating DOM) something different to user.

React does the same thing.

## What is React.js ?
    A client-side JavaScript library

    All about building modern, reactive user interfaces for the web.

    Declarative, component-focused approach

> HTML, CSS & JavaScript are about building user interfaces as well
  React makes building **complex**, **interactive** and **reactive** user interfaces **simpler**

https://github.com/academind/react-complete-guide-code/tree/01-getting-started/code/react-vs-vanilla-js-example

> React is all about **"Components"**

### Why Components ?
    Reusability - Don't repeat yourself
    Separation of Concerns - Don't do too many things in one and same place(function)
        -->Split big chunks of code into multiple smaller functions<--

### Declarative Approach
React allows you to create **re-usable and reactive components** consisting of **HTML and JavaScript** (and CSS).

    Define the desired target state(s) and let React figure out the actual JavaScript DOM instructions.

## Create React App
Install Node.js in your system (https://nodejs.org/en/download/).

    npx create-react-app my-app
    cd my-app
    npm start

Reference: https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

### Analyzing a Standard React Project

React is just a JavaScript code. React features + some special syntax intoduced by React, it is all JavaScript.

![Structure](./public/images/StandardProjectStruct.png)

> First code file which will be executed is **index.js**
    
    // Content of index.js

    import ReactDOM from 'react-dom/client';
    import './index.css';
    import App from './App';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

>Behind the scene this code will be transformed by some scripts when we start our react project.(npm start or react-scripts start).

ReactDom.createRoot() --> This creates the main entry point, the main hook of the overall user interface you are about to build with React.

> createRoot() tells React, where this React application,(this user interface which u build with React) should be placed in the web page that is loaded.

In **public** folder we have index.html file and that is the only html file this whole appication has and will be loaded by browser. (SPA- single page application)

HTML file is entry point for the place where the React-driven user interface should be rendered. (div containing **id root**)

> root.render(<App />) is for replacing the content of **App function component** to that div containing id root.

App is something we are importing (w/o .js extension) from App.js.

    // Content of App.js

    import Expenses from "./components/Expenses/Expenses";

    const App = () => {
        return (
            <div>
                <h2> Let's get started! </h2>
            </div>
        );
    }

    export default App;

App is function that is returing **JSX** code.

### JSX (JavaScript XML)

We got HTML code in JavaScript !!

This will only work because there are transformation steps running behind the scenes of this process(npm start process). Transformed code can be seen in the **sources static/js** folder.

![BundledCode](./public/images/BundledCode.png)

This will not just include our source code (all functional component) but the entire React package code also (whole React library source code and the whole React Dom library source code).

> JSX is **not HTML** code but it is developer friendly version of the code that will transfor to browser friendly code.

