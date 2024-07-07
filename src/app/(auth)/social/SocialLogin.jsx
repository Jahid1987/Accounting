import { signIn } from "next-auth/react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  // handling social login
  async function handleSocialLogin(provider) {
    await signIn(provider, {
      redirect: false,
      callbackUrl: "/",
    });
  }
  return (
    <div className="space-y-5">
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn btn-outline rounded-sm btn-sm btn-primary w-full text-xs md:text-sm"
      >
        <FaGoogle className="text-xl" />
        Log in With Google
      </button>
      <button
        onClick={() => handleSocialLogin("facebook")}
        className="btn btn-outline rounded-sm btn-sm btn-secondary w-full text-xs md:text-sm"
      >
        <FaFacebook className="text-xl" />
        Log in With Facebook
      </button>
    </div>
  );
};

export default SocialLogin;
