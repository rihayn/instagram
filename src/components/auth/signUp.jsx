import Logo from "../../assets/instagram.svg";
import { createContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { client } from "../../../lib/axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function SignUp() {
  const schema = yup.object({
    username: yup.string().required(),
    email: yup.string().email().required(),
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

  async function submitForm(user) {
    try {
      const response = await client.post("/user/signup", user);

      localStorage.setItem("token", response.data.jwt);
      toast.success("user added successfully", {
        type: "success",
      });
    } catch (error) {
      toast.error(error, {
        type: "error",
      });
    }
    console.log(user);
  }

  return (
    <section className="bg-white h-screen flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col gap-4 border border-[#9B9191] p-15">
        <img src={Logo} alt="Instagram" className="w-3xs" />
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex flex-col gap-2">
            <label className="input validator bg-[#F8F7F7] border border-[#8A8888]">
              <input
                {...register("email")}
                className="placeholder-[#8A8888] text-black"
                type="email"
                placeholder="Email"
              />
            </label>
            {errors?.email ? <span className="text-error">{errors.email.message}</span> : null}
            <label className="input validator bg-[#F8F7F7] border border-[#8A8888]">
              <input
                {...register("username")}
                className="placeholder-[#8A8888] text-black"
                type="username"
                placeholder="Username"
              />
            </label>
            {errors?.username ? <span className="text-error">{errors.username.message}</span> : null}
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
            {errors?.password ? <span className="text-error">{errors.password.message}</span> : null}
          </div>
          <button className="btn btn-info bg-[#44B8FA] text-[white] w-xs shadow-none border-none mt-4 ">
            Sign up
          </button>
        </form>
        <p className="text-black">
          Already have an account?{" "}
          <Link to={"/"} className="text-[#44B8FA]">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}
