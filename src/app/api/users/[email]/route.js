import {
  deleteUser,
  getUserByEmail,
  updateUser,
} from "@/controllers/userControllers";

async function GET(req, { params }) {
  try {
    const result = await getUserByEmail(params.email);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
async function PUT(req, { params }) {
  try {
    const updatedUser = await req.json();
    const result = await updateUser(updatedUser, params.email);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}

async function DELETE(req, { params }) {
  try {
    const result = await deleteUser(params.email);
    return Response.json(result);
  } catch (error) {
    return Response.json(error);
  }
}
export { GET, PUT, DELETE };
