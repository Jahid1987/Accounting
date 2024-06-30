import { FaFacebook, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  async function handleSignInWithGoogle() {
    console.log("ok");
  }
  return (
    <div className="space-y-5">
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-outline rounded-sm btn-sm btn-secondary w-full text-xs md:text-sm"
      >
        <FaFacebook className="text-xl" />
        Log in With Facebook
      </button>
      <button
        onClick={handleSignInWithGoogle}
        className="btn btn-outline rounded-sm btn-sm btn-primary w-full text-xs md:text-sm"
      >
        <FaGoogle className="text-xl" />
        Log in With Google
      </button>
    </div>
  );
};

export default SocialLogin;
