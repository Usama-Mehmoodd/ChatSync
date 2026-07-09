import React from "react";

export default function ChatArea() {

    



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
                <div className="flex justify-end">
                    <div>
                        <div className="bg-blue-500 text-lg text-white rounded-xl px-5 py-3">
                            Hello Alice! How are you?
                        </div>

                        <p className="text-xs text-right text-slate-500 mt-1">
                            10:29 AM
                        </p>
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
                        placeholder="Type a message..."
                        className="w-full text-xl text-slate-700 focus:outline-none placeholder-slate-400"
                    />

                    <button className="text-slate-400 hover:text-slate-600 pl-2 transition">
                        <i className="fa-regular fa-face-smile text-lg"></i>
                    </button>
                </div>

                <button
                    id="sendMessageBtn"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition shadow-sm shadow-blue-200 flex-shrink-0"
                >
                    <i className="fa-solid fa-paper-plane text-lg ml-0.5"></i>
                </button>
            </div>


        </div>
    );
}