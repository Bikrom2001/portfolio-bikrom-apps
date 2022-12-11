import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
