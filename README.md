Requirements Clarification:-
->Features
->Tech Stack
    -Redux
    -Tailwind
    -react-router-dom
    -What bundler are you choosing
    -What testing library (React testing library for rendering the component and simulating user inmteractions and Jest to run the tests and provide assertions)   
(Explaining with justification)

Planning:-
Header
Sidebar
Buttons Container
Video cards container

->watch page
Same Header
Watch Video Container

Notes:-

Why npx for create-react-app but npm for create vite@latest?
-This is based on how they handle their scaffolding tools.
-Scaffolding tools are CLI tools that automate the setup of a project by generating necessary file and folder structure.

1.create-react-app
-using npx ensures that you run the latest version without needing to install it globally.

2.create vite@latest
-npm create <package> is an alias for npx <package> but optimized for scaffolding tools.
-@latest ensures latest version.

What is eslint.config.js?
-eslint is a static code analysis tool that helps detect and fix problems in javascript and typescript code.It enforces coding standards and catches potential bugs before runtime.
-eg.cateches errors like unused variables,missing imports,incorrect syntax.

What is StrictMode in react?
StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.

StrictMode currently helps with:

Identifying components with unsafe lifecycles
Warning about legacy string ref API usage
Warning about deprecated findDOMNode usage
Detecting unexpected side effects
Detecting legacy context API
Ensuring reusable state