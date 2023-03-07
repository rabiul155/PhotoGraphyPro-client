import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from './context/UserContext';
import { Toaster } from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UserContext>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <PhotoProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PhotoProvider>

  </UserContext>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
