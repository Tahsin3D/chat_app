import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "Missing data" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be 6 least character" });
    }

    const user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "Email already exists." });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      //generate webtoken
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Invalid data" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Missing fields" });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    if (!passwordIsCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });

    generateToken(user._id, res);
    return res.status(200).json({
      id: user._id,
      name: user.fullName,
      email: user.email,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    return res.status(200).json({ message: "Cookie Cleared" });
  } 
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const updateProfile = (req, res) => {
  
}
