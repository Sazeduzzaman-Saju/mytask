import { RouterProvider } from 'react-router-dom';
import './App.scss';
import AuthProvider from './context/AuthProvider';
import router from './Routes/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
      </QueryClientProvider>

    </div>
  );
}
export default App;