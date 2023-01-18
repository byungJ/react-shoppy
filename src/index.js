import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Item from './pages/Item';
import Carts from './pages/Carts';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlodjoxjtUJpbiu5rbjXLOtHtgq9Fa7io",
  authDomain: "shoppy-2e340.firebaseapp.com",
  databaseURL: "https://shoppy-2e340-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "shoppy-2e340",
  storageBucket: "shoppy-2e340.appspot.com",
  messagingSenderId: "1066134227577",
  appId: "1:1066134227577:web:782e64cbf864b9391b22a8",
  measurementId: "G-JVJ1KRV90B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      { index: true, element: <Products/> },
      { path: '/products', element: <Products/> },
      { path: '/products/:itemId', element: <Item/> },
      { path: '/carts', element: <Carts/> }
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
