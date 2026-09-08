import React from 'react'
import ChatArea from '../components/ChatArea'
import {useOutletContext} from 'react-router-dom';


export default function Chats() {

    const { selectedUser } = useOutletContext<{ selectedUser: any }>();

    return (
        <div className="flex flex-1"> 
            <ChatArea selectedUser={selectedUser} />
        </div>
    )
}
