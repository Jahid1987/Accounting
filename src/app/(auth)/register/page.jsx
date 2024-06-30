"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../social/SocialLogin";
import Link from "next/link";

const page = () => {
  const [isPassword, setIsPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handling sign in with react hook form
  async function handleRegister(data) {
    console.log(data);
  }
  return (
    <div className="card bg-base-100 w-full md:w-1/2 mx-auto shrink-0 shadow-2xl text-xs md:text-sm">
      <h3 className="text-center mt-5 text-lg md:text-xl lg:text-2xl font-light">
        User Register
      </h3>
      <form onSubmit={handleSubmit(handleRegister)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text w-full flex justify-between">
              User Name
              {errors.name && (
                <span className="text-red-500">This field is required</span>
              )}
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered input-sm w-full rounded-sm "
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text w-full flex justify-between">
              User Photo
              {errors.image && (
                <span className="text-red-500">This field is required</span>
              )}
            </span>
          </label>
          <input
            type="file"
            name="image"
            {...register("image", { required: true })}
          />
        </div>
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
            Have an account?{" "}
            <Link href="/login" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
