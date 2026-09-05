// import React from 'react'
// import Aside from '../components/Aside'
// // import Main from '../components/Main'
// // Outlet is used to render the child routes of the current route. In this case, it will render the component corresponding to the current route (Chats, Users, Settings, or About) inside the MainLayout.
// import { Outlet } from 'react-router-dom';
// import ConversationList from '../components/ConversationList';
// import Chats from '../pages/Chats';


// export default function MainLayout() {

//     const [showAside, setShowAside] = React.useState(true);
//     const [showConversations, setShowConversations] = React.useState(true);

//     // const handleToggleAside = (e) => {
//     //     e.preventDefault();
//     //     setShowAside(!showAside);
//     // }

//     return (
//         <div className="flex flex-col md:flex-row h-screen">

//             {/* mobile screen responsive */}
//             <div className={`md:hidden flex justify-between items-center p-2 border-b`}>

//                 {/* <button onClick={(e) => handleToggleAside(e)}  */}

//                 {/* we will direct updater function used */}
                
//                 <button onClick={() => setShowAside(!showAside)}

//                     className="px-3 py-2 bg-gray-800 text-white rounded">
//                     <i className="fa-solid fa-bars"></i> Menu
//                 </button>
//                 <button onClick={() => setShowConversations(!showConversations)}
//                     className="px-3 py-2 bg-blue-600 text-white rounded">
//                     Chats
//                 </button>
//             </div>


//             {/* {showAside ? <div className="md:block md:w-64">
//                         <Aside/>
//                     </div> : ""} */}

//             {/* {(showAside || window.innerWidth >= 768) && (
//                 <div className="md:w-64">
//                     <Aside />
//                 </div>
//             ) } */}

//             {/* Sidebar (hidden on mobile unless toggled) */}

//             {showAside && (
//                 <div className="md:block md:w-64">
//                     <Aside />
//                 </div>
//             )}


//             {/* {(showConversations || window.innerWidth >= 700) && ( */}
//             {(showConversations || window.innerWidth >= 768) && (
//                 <div className="md:w-80">
//                     <ConversationList />
//                 </div>
//             )}

//             {/* Main Content and childs */}
//             <div className="flex-1 overflow-y-auto">
//                 <Outlet />
//             </div>
//         </div>
//     )
// }


import React from 'react';
import Aside from '../components/Aside';
import { Outlet } from 'react-router-dom';
import ConversationList from '../components/ConversationList';

// Custom hook to track window width
function useWindowWidth() {
  const [width, setWidth] = React.useState(window.innerWidth);
  
  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return width;
}

export default function MainLayout() {

  
  const [showAside, setShowAside] = React.useState(true);
  const [showConversations, setShowConversations] = React.useState(true);
  const windowWidth = useWindowWidth();
  
  // Determine if we're on mobile, tablet, or desktop
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isDesktop = windowWidth >= 1024;

  // Auto-show/hide based on screen size
  React.useEffect(() => {
    if (isDesktop) {
      setShowAside(true);
      setShowConversations(true);
    } else if (isTablet) {
      setShowAside(false); // Hide sidebar on tablet by default
      setShowConversations(true);
    } else {
      setShowAside(false);
      setShowConversations(false);
    }
  }, [windowWidth]);

    const handleToggleAside = () => {
        console.log("handleToggleAside called"); 
        setShowAside(true)
    }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      
      {/* Mobile/Tablet Header */}
      {(isMobile || isTablet) && (
        <div className="md:hidden lg:hidden flex justify-between items-center p-2 border-b">
          <button 
            onClick={() => setShowAside(!showAside)}
            className="px-3 py-2 bg-gray-800 text-white rounded"
          >
            <i className="fa-solid fa-bars"></i> Menu
          </button>
          
          {/* Show Chats button on mobile only */}
          {isMobile && (
            <button 
              onClick={() => setShowConversations(!showConversations)}
              className="px-3 py-2 bg-blue-600 text-white rounded"
            >
              Chats
            </button>
          )}
        </div>
      )}

      {/* Sidebar - Hidden on mobile, collapsible on tablet, always visible on desktop */}
      <div className={`
        ${!showAside ? 'hidden' : 'block'}
        ${isDesktop ? 'lg:block lg:w-64' : ''}
        transition-all duration-300 ease-in-out
      `}>
        
        <Aside  />
      </div>

      {/* Conversation List */}
      {(showConversations || isDesktop || isTablet) && (
        <div className={`
          ${isMobile ? 'w-80 z-50 shadow-lg bg-white' : ''}
          ${isTablet ? 'md:w-72 lg:w-80' : ''}
          ${isDesktop ? 'lg:w-80' : ''}
          transition-all duration-300 ease-in-out
        `}>
          <ConversationList />
        </div>
      )}

      {/* Overlay for mobile conversations */}
      {isMobile && showConversations && (
        <div 
          className=""
          onClick={() => setShowConversations(false)}
        />
      )}

      {/* Main Content */}
      <div className={`
        flex-1 overflow-y-auto
        ${isMobile && showConversations ? 'hidden' : ''}
        ${isTablet && !showConversations ? 'md:ml-0' : 'md:ml-0'}
        ${isDesktop ? 'lg:ml-0' : ''}
      `}>
        <Outlet />
      </div>
    </div>
  );
}
