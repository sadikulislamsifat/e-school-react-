import React from 'react';

const Blog = () => {
    return (
        <div className='md:p-8 flex justify-center'>
            <div className='w-11/12 md:w-8/12 h-54'>
            <div tabIndex={0} className="mt-2 collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
    What is the purpose of React Router?
  </div>
  <div className="collapse-content"> 
    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL</p>
  </div>
</div>

<div tabIndex={0} className="collapse mt-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  How does context api works ?
  </div>
  <div className="collapse-content"> 
    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
  </div>
</div>
        
<div tabIndex={0} className="collapse mt-4 collapse-plus border border-base-300 bg-base-100 rounded-box">
  <div className="collapse-title text-xl font-medium">
  What is useRef in React hooks?
  </div>
  <div className="collapse-content"> 
    <p>The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object. This object has a property called.</p>
  </div>
</div>
            </div>


        </div>
    );
};

export default Blog;