"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../social/SocialLogin";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const page = () => {
  const [isPassword, setIsPassword] = useState(true);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handling sign in with react hook form
  async function handleSignIn(data) {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res.status === 401) {
      return toast.error("Your credentials not correct!");
    }
    if (res.status === 200) {
      router.push("/");
    }
    // console.log(await res, "printing in login page");
  }
  return (
    <div className="card bg-base-100 w-10/12 md:w-1/2 mx-auto shrink-0 shadow-2xl text-xs md:text-sm">
      <h3 className="text-center mt-5 text-lg md:text-xl lg:text-2xl font-light">
        User Login
      </h3>
      <form onSubmit={handleSubmit(handleSignIn)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text w-full flex justify-between">
              Email
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered input-sm w-full rounded-sm "
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text w-full flex justify-between">
              Password
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </span>
          </label>
          <label className="input input-bordered input-sm w-full rounded-sm flex items-center gap-2">
            <input
              type={isPassword ? "password" : "text"}
              name="password"
              className="grow"
              placeholder="Search"
              {...register("password", {
                required: true,
              })}
            />
            <span onClick={() => setIsPassword(!isPassword)}>
              {!isPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-sm rounded-sm btn-primary">Login</button>
        </div>
      </form>
      <div>
        {/* social login  */}
        <h3 className="text-lg md:text-xl lg:text-2xl text-center font-light mb-2">
          Or
        </h3>
        <div className="mx-auto mb-5 w-10/12">
          <SocialLogin />
          <p className="mt-3">
            Have no account?{" "}
            <Link href="/register" className="link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
