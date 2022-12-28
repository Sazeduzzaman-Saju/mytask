import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-full'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;