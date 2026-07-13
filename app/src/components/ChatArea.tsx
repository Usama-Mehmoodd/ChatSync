
import React, { useEffect, useState } from "react";
import { socket } from "./socket";


export default function ChatArea() {


    useEffect(() => {

        socket.on("connection", () => {
            console.log("Connected to server with id: " + socket.id);
        });



        // socket.on('receive-message', (data) => {
        //     setChatMessages((prev) => [
        //         ...prev,
        //         {
        //             text : data.text,
        //             date : data.date,
        //         },
        //     ]);
        // });

        socket.on("receive-message", (data) => {
            setChatMessages((prev) => [...prev, data]);
        });

        return () => {
            socket.off("receive-message");
        };

    }, []);
    let senderId: string = socket.id || '';

    //  the state handle the user input
    const [message, setMessage] = useState('');

    // all messages will be stored in this state, and we will render them in the chat area
    const [chatMessages, setChatMessages] =
        useState<{ text: string, date: string, sender: string }[]>([]);


    // here data send to backend

    const handleSendMessage = () => {
        console.log(message);

        // setChatMessages((prev) => [
        //     ...prev,
        //     {
        //         text: message,
        //         date: new Date().toLocaleTimeString(),
        //     },
        // ]);

        // send message to backend 

        console.log(socket.id);
        
        socket.emit('send-message', {
            text: message,
            date: new Date().toLocaleTimeString(),
            sender: socket.id,
        });

        // listen message from other clients 
        socket.on('receive-message', (data) => {
            setChatMessages((prev) => [
                ...prev,
                {
                    text: data.text,
                    date: data.date,
                    sender: socket.id || '',
                },
            ]);
        });

        setMessage('');

    }



    return (
        <div className="chat-area flex-1 h-dvh flex flex-col bg-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-b-slate-300 border-l border-l-slate-200">
                <div className="flex items-center gap-3">
                    <div className="size-12 rounded-full bg-blue-500 flex items-center justify-center text-xl  text-white">
                        A
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl text-slate-800">Alice</h3>
                        <p className="text-sm text-green-500">Online</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 text-slate-600">
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>

                    <button>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Date */}
                <div className="text-center">
                    <span className="px-5 py-2 rounded-full bg-white text-sm">
                        Today
                    </span>
                </div>

                {/* Incoming */}
                <div className="flex items-end gap-2">
                    <div className="size-10 text-xl rounded-full bg-purple-500 flex items-center justify-center text-white">
                        A
                    </div>

                    <div>
                        <div className="bg-white rounded-xl text-lg px-5 py-3">
                            Hi! 👋
                        </div>

                        <p className="text-sm text-slate-500 mt-1">
                            10:28 AM
                        </p>
                    </div>
                </div>

                {/* Outgoing */}
                <div className={`flex ${senderId === socket.id ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                    <div>
                        {
                            chatMessages.map((msg, index) => (
                                <div key={index}>
                                    <div className={`w-max text-white rounded-xl 
                                        text-lg px-5 py-3 ${senderId === socket.id ? 'bg-blue-600' : 'bg-white'}`}>
                                        {msg.text}
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1 text-right">
                                        {msg.date}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>



            </div>

            {/* Input */}

            <div className="p-8 bg-white border-t border-slate-100 flex items-center space-x-3 flex-shrink-0">
                <div className="flex-1 flex items-center border border-slate-200 bg-slate-50/50 rounded-full px-4 py-4 focus-within:border-slate-300 transition">
                    <button className="text-slate-400 hover:text-slate-600 pr-2 transition">
                        <i className="fa-solid fa-paperclip text-base"></i>
                    </button>

                    <input
                        type="text"
                        id="message"
                        value={message}
                        onChange={(e) =>
                            setMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="w-full text-xl text-slate-700 focus:outline-none placeholder-slate-400"
                    />

                    <button className="text-slate-400 hover:text-slate-600 pl-2 transition">
                        <i className="fa-regular fa-face-smile text-lg"></i>
                    </button>
                </div>

                <button
                    onClick={() => handleSendMessage()}
                    style={{ cursor: "pointer" }}
                    id="sendMessageBtn"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition shadow-sm shadow-blue-200 flex-shrink-0"
                >
                    <i className="fa-solid fa-paper-plane text-lg ml-0.5"></i>
                </button>
            </div>


        </div>
    );
}