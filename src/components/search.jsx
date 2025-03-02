import { useState, useEffect } from "react";
import { client } from "../../lib/axios";
import ProfileAvatar from "../assets/profilepic.png"

export default function SearchBox() {
    const [searchTerm, setSearchTerm] = useState("");
    const [users, setUsers] = useState([]);
    const [recentSearches, setRecentSearches] = useState([]);

   
    useEffect(() => {
        const fetchUsers = async () => {
            if (!searchTerm.trim()) {
                setUsers([]);
                return;
            }

            try {
                const response = await client.get(
                    `/user/searchUser?search=${searchTerm}&limit=5`
                );
                console.log("API Response:", response.data);

                if (response.data && Array.isArray(response.data.users)) {
                    setUsers(response.data.users); 
                } else {
                    setUsers([]);
                }
            } catch (error) {
                console.error("Error fetching users:", error);
                setUsers([]);
            }
        };

        const delayDebounce = setTimeout(fetchUsers, 300);
        return () => clearTimeout(delayDebounce); 
    }, [searchTerm]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSelectUser = (user) => {
        if (!recentSearches.some((u) => u.username === user.username)) {
            setRecentSearches((prev) => [...prev, user]);
        }
    };

    const removeRecentSearch = (username) => {
        setRecentSearches(recentSearches.filter((user) => user.username !== username));
    };

    const clearRecentSearches = () => {
        setRecentSearches([]);
    };

    return (
        <div className="absolute left-22 p-5 w-l shadow-md rounded-r-xl bg-white">
            <div className="border-b border-[#DBDBDB]">
                <h1 className="text-black font-bold">Search</h1>
                <label className="input bg-[#EFEFEF] my-3">
                    <input
                        className="placeholder-[#8A8888] text-black w-3xs"
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </label>
            </div>
            <div className="flex justify-between">
                <h2 className="text-[#262626]">Recent</h2>
                <button
                    className="text-[#0095F6] cursor-pointer"
                    onClick={clearRecentSearches}
                >
                    Clear all
                </button>
            </div>
            <div className="mt-2">
                {recentSearches.length > 0 ? (
                    recentSearches.map((user, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-2 border-b border-gray-200"
                        >
                            <div className="flex items-center space-x-3">
                                <img
                                    src={user.profilePicture || ProfileAvatar}
                                    alt="user avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                                <div>
                                    <h4 className="text-black font-medium">{user.username}</h4>
                                </div>
                            </div>
                            <button onClick={() => removeRecentSearch(user.username)} className="text-black">
                                X
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm text-center mt-2">
                        No recent searches
                    </p>
                )}
            </div>
            {searchTerm && (
                <div className="mt-3 bg-gray-100 p-3 rounded-md">
                    <h3 className="text-sm font-bold mb-2 text-black">Suggestions</h3>
                    {users.length > 0 ? (
                        users.map((user, index) => (
                            <div
                                key={index}
                                className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-200 rounded-md"
                                onClick={() => handleSelectUser(user)}
                            >
                                <div className="flex items-center space-x-3">
                                    <img
                                        src={user.profilePicture || ProfileAvatar}
                                        alt="user avatar"
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-black">{user.username}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500 text-sm">No suggestions found</p>
                    )}
                </div>
            )}
        </div>
    );
}