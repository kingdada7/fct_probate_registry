import User from "../model/User.js";

// Update status of standard-admin registration
export const updateStandardAdminStatus = async (req, res) => {
  try {
    const { status } = req.body; // expects "approved" or "rejected"
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Only pending standard-admins can have their status changed
    if (user.role !== "standard-admin" || user.status !== "pending") {
      return res.status(400).json({
        message: "This user is not a pending standard-admin",
      });
    }

    if (!["approved", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    user.status = status;
    await user.save();

    res.json({
      message: `Standard-admin registration for ${user.name} has been ${status}.`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};