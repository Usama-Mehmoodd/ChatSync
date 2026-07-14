import React from 'react';
import { socket } from './socket';

export default function ChatMessage({
    client: socketId,
    data: chatMessages,
}: {
    data: { text: string; date: string; sender: string }[];
    client: string;
}) 

    {
    // helper to format date into 12-hour with AM/PM
    const formatTime = (dateString: string) => {
       
        // console.log('dateString : ' + dateString);
        const date = new Date(dateString);

        const time = date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: true });
        // console.log('time : ' + time);
        
        return time;
    };

    return (
        <div className="space-y-4">

            {chatMessages.map((msg, index) => {
                const isMe = msg.sender === socketId;
                return (
                    <div
                        key={index}
                        className={`flex ${isMe ? 'justify-end' : 'justify-start'} items-end gap-2`}
                    >
                        
                        {!isMe && (
                            <div className="size-10 text-xl rounded-full bg-purple-500 flex items-center justify-center text-white">
                                {msg.sender?.charAt(0).toUpperCase() || 'U'}
                            </div>
                        )}

                        <div>
                            <div
                                className={`w-max rounded-xl text-lg px-5 py-3 ${isMe ? 'bg-blue-600 text-white' : 'bg-white text-slate-800'
                                    }`}
                            >
                                {msg.text}
                            </div>
                            <p
                                className={`text-sm text-slate-500 mt-1 ${isMe ? 'text-right' : 'text-left'
                                    }`}
                            >
                                {formatTime(msg.date)}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
