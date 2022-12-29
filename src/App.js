import { RouterProvider } from 'react-router-dom';
import './App.scss';
import AuthProvider from './context/AuthProvider';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  );
}
export default App;