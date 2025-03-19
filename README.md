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


How to create a toggle functionality for the sidebar?
-Using global state i.e. using redux.Wherever there is confusion in state uplifting,use redux.Also,use reduc dev tools to check if it is working or not.

How to set up redux?
-Install @reduxjs/react
-Install react-redux
-Create a store
-Create a slice
-Wherever you want to use it,use the useDispatch hook and call the reducer function.
-To fetch/subsribe use the selector using useSelector.
-remember to subscribe only to the part which is needed 
const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

Using The APp router and its children:
-The outlet is a placeholder for children components.
-It goes where the components are interchanging.
-We load the sticky componenet like a Header by default and others[children] with outlet.

const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

-In the above code store is the main store we create.
-app is the name inside the reducer of store.
-isMenuOpen is a function inside reducers of appSlice.

-So this basically looks inside of a reducer.


How do we get the param using useSearchParams hook?

When the to link looks like "/watch?v="

so we have to specifically search for the value of v param

const [searchParams] = useSearchParams();
console.log(searchParams.get("v"));

-so we use the above code

Revising Higher Order Components:-
-HOCs are functions which receive a component and returns a component adding something over top of it.
-HOCs are pure functions.

Debouncing:-
-Debouncing is a technique used to reduce the number of api calls.
-When searching something,websites like youtube,flipkart gives you suggesstions.
-So,after every key press,new suggesstions occur.
-That is if we type slow.
-But,If we type fast,instead of making api call for every key press,it makes API call for a bundle of key presses.This technique is called as debouncing.
