import Profilepic from "../assets/Frame.svg"
export default function Profile() {
    return (
        <div className="w-4/6 h-[450px] flex px-20 gap-[5vw] border-b-1 border-indigo-500" >
            <div className=" h-48 flex justify-center items-center pl-20 ">
                <div className="w-24 h-24 flex  ">
                    <img src={Profilepic} alt="" className="rounded-full" />
                </div>
            </div>
            <div>
                <div className=" flex gap-[2vw] pt-12 ">
                    <h1 className="text-xl font-bold">
                        sajjad
                    </h1>
                    <button className="w-[117px] h-[32px] bg-[#0095F6] rounded-xl cursor-pointer">
                        Following
                    </button>
                </div>
                <div className="flex gap-[25px]">
                    <div className="flex pt-6 gap-[10px]">
                        <h1 className="font-bold">
                            1882
                        </h1>
                        <p>posts</p>
                    </div>
                    <div className="flex pt-6 gap-[10px]">
                        <h1 className="font-bold">
                            4M
                        </h1>
                        <p>followers</p>
                    </div>
                    <div className="flex pt-6 gap-[10px]">
                        <h1 className="font-bold">
                            454
                        </h1>
                        <p>following</p>
                    </div>
                </div>
                <div className="flex flex-col  pt-[20px]">
                    <h1>
                        Marques Brownlee
                    </h1>
                    <p>
                        I promise I won't overdo the filters.
                    </p>
                    <a href="" className="text-[#00376B]">mkbhd.com</a>
                </div>
            </div>
        </div>
    )
}