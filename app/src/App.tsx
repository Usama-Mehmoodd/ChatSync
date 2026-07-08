import React from 'react'
import { Routes, Route } from 'react-router-dom';

import MainLayout from './MainLayout/MainLayout'
// pages
import About from './pages/About';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Chats from './pages/Chats';


export default function App() {


  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Chats />} />

        <Route path="chats" element={<Chats />} />
        <Route path="users" element={<Users />} />
        <Route path="settings" element={<Settings />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  )
}
