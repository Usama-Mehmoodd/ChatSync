
import React from "react";
import {conversationList } from '../../utilities/helper';
import { type Conversation  } from "../../types";

export default function ConversationList({
  onSelectedUser,
}: {
  onSelectedUser: (user: any) => void;
}) {
  const [allUsers, setAllUsers] = React.useState<any[]>([]);

  React.useEffect(() => {
    getAllUsers();
  }, []);

  async function getAllUsers() {
    try {
     

      setAllUsers(conversationList);

    

      /*
      const url = "http://localhost:5000/users";

      const response = await fetch(url);
      const result = await response.json();

      const transformedData = dataTransformation(result.data);

      setAllUsers(transformedData);
      */

    } catch (error) {
      console.error("Failed to fetch all users", error);
    }
  }

//   function dataTransformation(data: any[]) {
//     const originalData = Array.isArray(data) ? data : [];

//     return originalData.map((user) => ({
//       ...user,
//       username:
//         user.username.charAt(0).toUpperCase() +
//         user.username.slice(1),
//     }));
//   }

  return (
    <div className="conversation-list w-80 h-screen bg-white border-r border-slate-100 overflow-y-auto">
      
      {/* Header */}
      <div className="border-r border-slate-100 flex flex-col shrink-0">
        <div className="p-4 flex items-center justify-between border-b border-slate-300">
          <h3 className="text-lg font-bold text-slate-800">
            Conversations
          </h3>

          <button className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 rounded-lg transition">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>

      {/* Conversation List */}
      {allUsers.map((elem : Conversation, i : number) => (
        <div
          key={"0"+ i}
          onClick={() => onSelectedUser(elem)}
          className="flex p-4 border-b border-slate-200 transition hover:bg-slate-100 cursor-pointer"
        >
          {/* Avatar */}
          <div className="relative">
            <div className="size-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
              <span>
                {elem.username.charAt(0).toUpperCase()}
              </span>
            </div>

            {/* Online indicator */}
            {elem.isOnline && (
              <span className="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>

          {/* User Information */}
          <div className="flex-1 min-w-0 px-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-800 truncate">
                {elem.username}
              </h4>

              <span className="text-xs text-slate-400">
                {new Date(elem.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>

            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-slate-500 truncate">
                {elem.lastMessage}
              </p>

              {/* Unread count */}
              {elem.unreadCount > 0 && (
                <span className="ml-2 min-w-5 h-5 px-1 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center">
                  {elem.unreadCount}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}





















