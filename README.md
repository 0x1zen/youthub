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

Below is the code for debouncing:-
useEffect(()=>{
    setTimeout(()=>search(),200);
    console.log("useEffect called");
    // Make an api call for every key press
    // But if the difference between each key press is less than 200ms decline the api call.
  },[input]);

  const search = async()=>{
    const response=await fetch(YOUTUBE_SEARCH_API + input);
    const data=await response.json();
    console.log(data[1]);
  }

-How does the above code work?
-The useffect will only called after the input changes.
-If i type something,the setTimeout timer will start.
-If i type multiple keys,for every key,new timer will start.
-Every time a new timer starts because every time we change the input,the component re-renders,so every time a new timer starts.

eg.
key pressed - i
1.componenet renders
2.useEffect called
3.starts timer =>Makes api call after 200ms.

key pressed - in
1.component re-renders
2.useEffect called
3.Starts timer =>makes api call after 200ms.

-The return function of the useEffect hook in React, often referred to as the cleanup function, is not called every time a component re-renders. Instead, it is called in the following scenarios:

Before the component unmounts: This is to clean up any subscriptions, event listeners, or any side effects set up after the initial render.
Before the dependencies of the useEffect change: If the useEffect hook is used with a dependency array, the cleanup function will run every time the dependencies change, right before the next effect is run.

useEffect(()=>{
    const timer=setTimeout(()=>search(),200);

    return ()=>{
      clearInterval(timer);
    }
    // Make an api call for every key press
    // But if the difference between each key press is less than 200ms decline the api call.
  },[input]);   

onFocus and onBlur :-

-If the input box is onFocus then only show suggestions,and if we click anywhere else,that is blur,then dont show suggestions.

The Object.assign function :-
-It takes two arguements 
Object.assign(target, ...sources)
-Where it mutates target and sources inside it.

Caching inside of redux store:-

cacheResults({[input] : data[1]})


The syntax {[input]: data[1]} in JavaScript is used to dynamically set an object property based on the value of the input variable. This is known as computed property names in JavaScript ES6. Here's how it works and why it's used in your context:

Computed Property Names
Purpose: Allows you to set an object's property key based on the value of a variable at runtime.
Syntax: The square brackets [] around the variable input tell JavaScript to evaluate the variable and use its value as the property name.

Yes, in this context, the term "property name" refers to the key of an object in JavaScript.


***N-level nested comments usig recursion:-
-by using the same component inside of the component we can achieve n-level nesting.

const CommentsList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment,index)=>{
        const {replies}=comment;
        return (
          <div>
            <Comment data={comment}></Comment>
            <div className="pl-3 border-l-2">
              <CommentsList comments={replies}></CommentsList>
            </div>
          </div>
        )
      })}
    </div>
  )
}

-Just like the above example

***How do we build a live chat feature ?

Challenges:-
-Get live data
-Update the UI with the live data.

Intro to websockets:-
-Web sockets is a two way connection.
-It is like a handshake between server and UI.
-Once the handshake is done,we can quickly access data.
-It is bidirectional live data.
-By websockets,we can send data from UI to backend and backend to UI also.
-API Polling:-
  -API polling is a method where the client repeatedly requests data from the server at regular intervals.
  -This is typically accomplished by making HTTP requests to an API endpoint.
-For websocket connection,there is no regular interval.

For example:-
-For applications like cricbuzz,APi polling is used after every 25 seconds.
-In apps like whatsapp,web scokets are used.

