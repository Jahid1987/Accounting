import { connectToDatabase } from "@/lib/connectDB";
import bcrypt from "bcrypt";
// getting all users
async function getUsers() {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection("users").find().toArray();
    return result;
  } catch (error) {
    return error;
  }
}

// getting single user
async function getUserByEmail(email) {
  try {
    const { db } = await connectToDatabase();

    const result = await db.collection("users").findOne({ email });
    return result;
  } catch (error) {
    return error;
  }
}
// creating new user
async function createUser(newUser) {
  try {
    const hashedPass = await bcrypt.hash(newUser.password, 14);
    const { db } = await connectToDatabase();

    const result = await db
      .collection("users")
      .insertOne({ ...newUser, password: hashedPass });
    return result;
  } catch (error) {
    return error;
  }
}
// updating user
async function updateUser(updatedUser, email) {
  try {
    const updatedDoc = {
      $set: { ...updatedUser },
    };
    const { db } = await connectToDatabase();
    const result = await db
      .collection("users")
      .updateOne({ email }, updatedDoc);
    return result;
  } catch (error) {
    return error;
  }
}

// deleting user by email
async function deleteUser(email) {
  try {
    const { db } = await connectToDatabase();
    const result = await db.collection("users").deleteOne({ email });
    return result;
  } catch (error) {
    return error;
  }
}

export { getUsers, createUser, getUserByEmail, updateUser, deleteUser };
