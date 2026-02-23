import User from "../model/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import nanoid from "nanoid";

//@desc register a new user
//@route POST /api/auth/register
//@access Public
const registerUser = async (req, res) => {
  try {
    const { name, email, password, role, adminCode } = req.body;
    console.log(req.body);
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash the password
    const userSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, userSalt);

    let assignedRole = "citizen";
    let status = "approved";

    // Check if the user is registering as a super-admin and validate the admin code
    if (adminCode) {
      if (adminCode !== process.env.SUPER_ADMIN_CODE) {
        return res.status(400).json({ message: "Invalid admin code" });
      }
      assignedRole = "super-admin";
      status = "approved";
    }
    //STANDARD-ADMIN REGISTRATION
    else if (role === "standard-admin") {
      assignedRole = "standard-admin";
      status = "pending";
    }

    // create a new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: assignedRole,
      status,
    });
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      message:
        assignedRole === "standard-admin"
          ? "Registration submitted. Awaiting superadmin approval."
          : "Registration successful",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//@desc login user
//@route POST /api/auth/login
//@access Public
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    //check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // check if standard admin is approved
    if (user.role === "standard-admin" && user.status !== "approved") {
      return res.status(403).json({
        message: "Your account is pending approval by a super-admin.",
      });
    }
    // generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export { registerUser, loginUser };
