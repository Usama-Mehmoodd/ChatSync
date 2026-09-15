
import React from "react";

const conversationList = [
  {
    id: 1,
    _id: "user_001",
    username: "John Doe",
    lastMessage: "Hey, how are you doing?",
    timestamp: "2026-09-15T10:30:00Z",
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: 2,
    _id: "user_002",
    username: "Jane Smith",
    lastMessage: "See you tomorrow!",
    timestamp: "2026-09-15T09:15:00Z",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 3,
    _id: "user_003",
    username: "Bob Johnson",
    lastMessage: "Thanks for your help!",
    timestamp: "2026-09-14T18:45:00Z",
    unreadCount: 5,
    isOnline: true,
  },
  {
    id: 4,
    _id: "user_004",
    username: "Sarah Williams",
    lastMessage: "I'll send you the documents tonight.",
    timestamp: "2026-09-14T16:20:00Z",
    unreadCount: 1,
    isOnline: true,
  },
  {
    id: 5,
    _id: "user_005",
    username: "Michael Brown",
    lastMessage: "Let's discuss this tomorrow.",
    timestamp: "2026-09-14T14:10:00Z",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 6,
    _id: "user_006",
    username: "Emily Davis",
    lastMessage: "That sounds great! 👍",
    timestamp: "2026-09-13T21:30:00Z",
    unreadCount: 3,
    isOnline: true,
  },
  {
    id: 7,
    _id: "user_007",
    username: "David Wilson",
    lastMessage: "Can you check the latest update?",
    timestamp: "2026-09-13T19:05:00Z",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 8,
    _id: "user_008",
    username: "Olivia Martinez",
    lastMessage: "Thank you so much!",
    timestamp: "2026-09-13T15:40:00Z",
    unreadCount: 4,
    isOnline: true,
  },
  {
    id: 9,
    _id: "user_009",
    username: "James Anderson",
    lastMessage: "I'll call you in a few minutes.",
    timestamp: "2026-09-12T12:25:00Z",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: 10,
    _id: "user_010",
    username: "Sophia Taylor",
    lastMessage: "Perfect, see you there!",
    timestamp: "2026-09-12T10:15:00Z",
    unreadCount: 1,
    isOnline: true,
  },
];

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
      {allUsers.map((elem) => (
        <div
          key={elem._id}
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





















