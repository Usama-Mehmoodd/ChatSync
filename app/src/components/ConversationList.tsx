import React from 'react'

export default function ConversationList({ onSelectedUser }: { onSelectedUser: (user: any) => void }) {

    React.useEffect(() => {

        getAllUsers();

    }, []);

    const [allUsers, setAllUsers] = React.useState<any[]>([]);

    async function getAllUsers() {

        try {
            const url: string = 'http://localhost:5000/users';

            const response = await fetch(url);
            const result = await response.json();
            // console.log(result.data);

            const transformedData = dataTransformation(result.data);
            setAllUsers(transformedData);

        } catch (error) {
            console.error('failed to fetch all users', error);
        }

    }

    function dataTransformation(data: any) {
        const originalData = Array.isArray(data) ? data : [];

        return originalData.map(user => ({
            ...user,
            username: user.username.charAt(0).toUpperCase() + user.username.slice(1)
        }));
    }



    return (
        // <div className="conversation-list w-80 h-dvh bg-white border-r border-slate-100">
        <div className="conversation-list w-80 h-screen bg-white border-r border-slate-100 overflow-y-auto">
            <div className="border-r border-slate-100 flex flex-col flex-shrink-0">
                <div className="p-4 flex items-center justify-between border-b border-slate-300">
                    <h3 className="text-lg font-bold text-slate-800 ">Conversations</h3>
                    <button className="w-8 h-8 flex items-center justify-center text-blue-600 hover:bg-slate-50 rounded-lg transition">
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

            {allUsers.map((elem: any) => (
                <div className="flex p-5 border-b border-slate-200 transition hover:bg-slate-200 cursor-pointer" key={elem._id} onClick={() => onSelectedUser(elem)}>
                    <div className="circle size-9 bg-blue-400 rounded-full flex items-center justify-center text-white">
                        <span>{elem.username.charAt(0)}</span>
                    </div>
                    <div className="nameTitle px-6 ">
                        <h4 className="text-sm font-semibold text-slate-800">{elem.username}</h4>
                        <p className="text-sm text-slate-500">Hello, how are you?</p>
                    </div>

                </div>
            ))}


        </div>
    )

}