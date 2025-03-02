import { useEffect, useState } from "react";
import { client } from "../../lib/axios";
export default function Profile() {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);

  const fetchUserData = async () => {
    const username = localStorage.getItem("username");
    try {
      const response = await client.get(`/user/u/${username}`);

      setUserData(response.data.user);
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);
  return (
    <section className="h-screen bg-white">
          <div className="w-full  flex px-20 gap-[5vw] border-b-1 border-gray-300 pb-10">
      <div className=" w-full flex justify-center items-center pl-20 ">
        <div className="w-24 h-24 flex  ">
          <img src={userData.profilePicture} alt="" className="rounded-full" />
        </div>
      </div>
      <div>
        <div className=" flex gap-[2vw] pt-12 ">
          <h1 className="text-xl font-bold text-[#262626]">
            {userData.username}
          </h1>
          <button className="w-[117px] h-[32px] bg-[#0095F6] rounded-xl cursor-pointer">
            Following
          </button>
        </div>
        <div className="flex gap-[25px]">
          <div className="flex pt-6 gap-[10px]">
            <h1 className="font-bold text-[#262626]">1886</h1>
            <p className="text-[#262626]">posts</p>
          </div>
          <div className="flex pt-6 gap-[10px]">
            <h1 className="font-bold text-[#262626]">
              {userData.followers?.length}
            </h1>
            <p className="text-[#262626]">followers</p>
          </div>
          <div className="flex pt-6 gap-[10px]">
            <h1 className="font-bold text-[#262626]">{userData.followings?.length}</h1>
            <p className="text-[#262626]">following</p>
          </div>
        </div>
        <div className="flex flex-col  pt-[20px]">
          <h1 className="text-[#262626]">Marques Brownlee</h1>
          <p className="text-[#262626]">
            I promise I won't overdo the filters.
          </p>
          <a href="" className="text-[#00376B]">
            mkbhd.com
          </a>
        </div>
      </div>
    </div>
    </section>
  
  );
}
