import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import MainContent from './components/MainContent';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router";
import Connect from './components/Connect';
import Projects from './components/Projects';
import Resume from './components/Resume';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainContent />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="connect" element={<Connect />} />
      <Route path="projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
