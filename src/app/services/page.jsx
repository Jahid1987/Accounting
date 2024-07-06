import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <div>
      <h3>this is services</h3>
    </div>
  );
};

export default page;
