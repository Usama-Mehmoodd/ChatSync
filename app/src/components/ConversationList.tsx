import React from 'react'

export default function ConversationList() {



    return (
        <div className="conversation-list w-80 h-dvh bg-white border-r border-slate-100">
            <div className="border-r border-slate-100 flex flex-col flex-shrink-0">
                <div className="p-4 flex items-center justify-between border-b border-slate-50">
                    <h3 className="text-base font-bold text-slate-800">Conversations</h3>
                    <button className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 rounded-lg transition">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            <div className="flex p-5">
                <div className="circle size-8 bg-blue-400 rounded-full flex items-center justify-center text-white">
                    <span>A</span>
                </div>
                <div className="nameTitle">
                    <h4 className="text-sm font-semibold text-slate-800">Alice</h4>
                    <p className="text-xs text-slate-500">Hello, how are you?</p>
                </div>

            </div>


        </div>
    )
}
