
import './App.css';
import router from './router/router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App mx-0 lg:mx-12 md:mx-6 sm:mx-2">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
