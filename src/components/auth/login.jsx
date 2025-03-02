import Logo1 from "../../assets/instagram.svg";
import { createContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { client } from "../../../lib/axios";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import LoginHero from "../../assets/loginPic.svg";

export default function Login() {
  const navigate = useNavigate();
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().required().min(8).max(16),
  });
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  function toggleShowPassword() {
    setIsShowPassword(!isShowPassword);
  }
  async function PostApiRegister(user) {
    try {
      const response = await client.post("/user/login", user);
      localStorage.setItem("token", response.data.jwt);
      toast.success("Login successful", { type: "success" });
      console.log(response);
      if (response) {
        navigate("/feed/home");
      }
    } catch (error) {
      console.error(error);
      toast.error("Login failed", { type: "error" });
    }
  }

  return (
    <section className="bg-white h-screen flex justify-center items-center gap-35">
      <img src={LoginHero} alt="preview" className="h-screen" />
      <div className="flex justify-center items-center flex-col gap-4 border border-[#9B9191] p-15">
        <img src={Logo1} alt="Instagram" className="w-3xs" />
        <form onSubmit={handleSubmit(PostApiRegister)}>
          <div className="flex flex-col gap-2">
            <label className="input validator bg-[#F8F7F7] border border-[#8A8888]">
              <input
                {...register("username")}
                className="placeholder-[#8A8888] text-black"
                type="username"
                placeholder="Username"
              />
            </label>
            {errors?.username ? (
              <span className="text-error">{errors.username.message}</span>
            ) : null}
            <label className="input validator bg-[#F8F7F7] border border-[#8A8888]">
              <input
                {...register("password")}
                className="placeholder-[#8A8888] text-black"
                placeholder="Password"
                type={isShowPassword ? "text" : "password"}
              />
              <span
                className="text-[#8A8888] font-bold cursor-pointer"
                onClick={toggleShowPassword}
              >
                Show
              </span>
            </label>
            {errors?.password ? (
              <span className="text-error">{errors.password.message}</span>
            ) : null}
          </div>
          <button
            type="submit"
            className="btn btn-info bg-[#44B8FA] text-[white] w-xs shadow-none border-none mt-4 "
          >
            Log In
          </button>
        </form>
        <p className="text-black">
          Don’t have an account?{" "}
          <Link to={"/signup"} className="text-[#44B8FA]">
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
}
