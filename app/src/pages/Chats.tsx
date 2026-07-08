import React from 'react'
  import ConversationList from '../components/ConversationList'
  import ChatArea from '../components/ChatArea'


export default function Chats() {


    return (
        <div className="flex flex-1"> 
            <ConversationList />
            <ChatArea />
        </div>
    )
}
