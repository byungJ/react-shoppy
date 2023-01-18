import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './components/Banner';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Outlet/> 
    </>
  );
}

