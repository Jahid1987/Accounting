"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import SocialLogin from "../social/SocialLogin";
import Link from "next/link";
import uploadImage from "@/lib/uploadImage";
import { toast } from "react-toastify";

const page = () => {
  const [isPassword, setIsPassword] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handling sign in with react hook form
  async function handleRegister(data) {
    // checking if the email already exist?
    const user = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}//api/users/${data.email}`
    );
    const emailExist = await user.json();
    if (emailExist) return toast.warning(`${data.email} already exist.`);

    // uploading image to imagebb
    const { success, displayUrl: image } = await uploadImage(data.image[0]);
    if (!success) return toast.error("Uploading Image faild!");

    // creating new user
    const newUser = {
      name: data.name,
      image,
      email: data.email,
      password: data.password,
      role: "user",
    };
    // saving in database
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const result = await res.json();
    if (result.insertedId) {
      toast.success("User Created Successfully!");
      reset();
    } else {
      toast.error("OOPS! Something wrong.");
      reset();
    }
  }
  return (
    <div className="card bg-base-100 w-10/12 md:w-1/2 mx-auto shrink-0 shadow-2xl text-xs md:text-sm">
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
          <button className="btn btn-sm rounded-sm btn-primary">
            Register
          </button>
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
