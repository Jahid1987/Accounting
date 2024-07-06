import { createUser, getUsers } from "@/controllers/userControllers";

async function POST(req, res) {
  try {
    const newUser = await req.json();
    const result = await createUser(newUser);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}

async function GET() {
  try {
    const result = await getUsers();
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
export { POST, GET };
