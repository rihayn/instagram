import Logo from "../../assets/instagram.svg"
import LoginHero from "../../assets/loginPic.svg"

export default function Login () {
    return (
        <section className="bg-white h-screen flex justify-center items-center gap-35">
            <img src={LoginHero} alt="preview" className="h-screen" />
            <div className="flex justify-center items-center flex-col gap-4 border border-[#9B9191] p-15">
                <img src={Logo} alt="Instagram" className="w-3xs" />
                <form>
                    <div className="flex flex-col gap-2">
                        <label className="input validator bg-[#F8F7F7] border border-[#8A8888]">
                            <input className="placeholder-[#8A8888] text-black" type="input" placeholder="Username" />
                        </label>
                        <label className="input validator bg-[#F8F7F7] border border-[#8A8888]">
                            <input className="placeholder-[#8A8888] text-black" type="password" placeholder="Password" />
                        </label>
                    </div>
                    <button className="btn btn-info bg-[#44B8FA] text-[white] w-xs shadow-none border-none mt-4 mb-25 ">Log in</button>
                </form>
                <p className="text-black">Don’t have an account? <a href="#" className="text-[#44B8FA]">Sign up</a></p>
            </div>
        </section>
    )
}