import React from 'react'
import Aside from '../components/Aside'
// import Main from '../components/Main'
// Outlet is used to render the child routes of the current route. In this case, it will render the component corresponding to the current route (Chats, Users, Settings, or About) inside the MainLayout.
import { Outlet } from 'react-router-dom';
import ConversationList from '../components/ConversationList';


export default function MainLayout() {

    const [showAside, setShowAside] = React.useState(false);
    const [showConversations, setShowConversations] = React.useState(true);

    // const handleToggleAside = (e) => {
    //     e.preventDefault();
    //     setShowAside(!showAside);
    // }

    return (
        <div className="flex flex-col md:flex-row h-screen">

                {/* mobile screen responsive */}
            <div className="md:hidden flex justify-between items-center p-2 border-b">

                {/* <button onClick={(e) => handleToggleAside(e)}  */}

                {/* we will direct updater function used */}
                <button onClick={() => setShowAside(!showAside)} 

                className="px-3 py-2 bg-gray-800 text-white rounded">
                    <i className="fa-solid fa-bars"></i> Menu
                </button>
                <button onClick={() => setShowConversations(!showConversations)} 
                className="px-3 py-2 bg-blue-600 text-white rounded">
                    Chats
                </button>
            </div>

            {/* Sidebar (hidden on mobile unless toggled) */}

                    {/* {showAside ? <div className="md:block md:w-64">
                        <Aside/>
                    </div> : ""} */}

            {showAside && (
                <div className="md:block md:w-64">
                    <Aside />
                </div>
            )}

          
            {/* {(showConversations || window.innerWidth >= 700) && ( */}
            {(showConversations || window.innerWidth >= 768) && (
                <div className="md:w-80">
                    <ConversationList />
                </div>
            )}

            {/* Main Content and childs */} 
            <div className="flex-1 overflow-y-auto">
                <Outlet />
            </div>
        </div>
    )
}
