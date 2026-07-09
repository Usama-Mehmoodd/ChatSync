import React from 'react'
import Aside from '../components/Aside'
// import Main from '../components/Main'
// Outlet is used to render the child routes of the current route. In this case, it will render the component corresponding to the current route (Chats, Users, Settings, or About) inside the MainLayout.
import { Outlet } from 'react-router-dom';
import ConversationList from '../components/ConversationList';


export default function MainLayout() {

    return (
        <div className='flex'>

            <Aside />
            <ConversationList />
            <Outlet />

        </div>
    )
}
