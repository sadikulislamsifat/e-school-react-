import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Container from './components/Container/Container';
import Topic from './components/Container/Topic/Topic';
import Blog from "./components/Blog/Blog";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
       
        {
         path: 'topic',
         loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
         element: <Topic></Topic> 
        },    
        {
         path: 'container/:id',
         loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),         
         element: <Container></Container>
        },
        {
         path: 'blog',
         element: <Blog></Blog>
        },
        

       
      ]

    },
    {
      path: '*',
      element: <div>
        <div>
          <h1>404</h1>
          <h3>This Page Not Found</h3>
        </div>
      </div>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    
    
    </div>
  );
}

export default App;
