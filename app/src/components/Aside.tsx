import React from 'react'
import { NavLink } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
  icon: string;
}

export default function Aside() {

  const navItems: NavItem[] = [
    {
      name: "Chats",
      path: "/chats",
      icon: "fa-solid fa-message",

    },
    {
      name: "Users",
      path: "/users",
      icon: "fa-solid fa-users",

    },
    {
      name: "Settings",
      path: "/settings",
      icon: "fa-solid fa-gear",

    },
    {
      name: "About",
      path: "/about",
      icon: "fa-solid fa-circle-info",

    },
  ];

  const [switchTab, setSwitchTab] = React.useState(0);

  return (
    <div>
      {/* <div className="w-80 h-dvh bg-gray-800 text-white p-4"> */}
      <div className="w-80 h-screen bg-gray-800 text-white p-4 overflow-y-auto">

        <h2 className="text-2xl font-bold mb-4">WebSocket Chat</h2>
        <ul>
          {navItems.map((item, index) => (
            <li onClick={() => setSwitchTab(index)} key={item.name}
              className={`mb-2 ${index === switchTab ? 'bg-gray-700 rounded' : ''}`}>
             
              <NavLink to={item.path} className="flex items-center p-2">
                <i className={`${item.icon} mr-2`}></i>
                {item.name}
              </NavLink>
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
