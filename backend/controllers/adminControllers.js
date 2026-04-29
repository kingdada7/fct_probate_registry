import User from "../model/User.js";

// Update status of standard-admin registration
export const updateStandardAdminStatus = async (req, res) => {
  try {
    const { status } = req.body; // expects "approved" or "rejected"

    // Check permission first
    if (req.user.role !== "super-admin") {
      return res.status(403).json({ message: "Access denied" });
    }

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

    // Update status
    user.status = status;

    //  Skip full validation to avoid division/staffId errors
    await user.save({ validateBeforeSave: false });

    res.json({
      message: `Standard-admin registration for ${user.name} has been ${status}.`,
    });
  } catch (error) {
    console.log("Backend Error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getPendingAdmins = async (req, res) => {
  try {
    const users = await User.find({
      role: "standard-admin",

      status: "pending",
    }).select("-password");

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// controllers/adminControllers.js
export const getApprovedAdmins = async (req, res) => {
  try {
    const admins = await User.find({
      role: "standard-admin",
      status: "approved",
    }).select("-password");

    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// admins that are currently online (active within last 15 minutes)
export const getOnlineAdmins = async (req, res) => {
  try {
    const oneMinutesAgo = new Date(Date.now() - 1 * 60 * 1000);

    const onlineAdmins = await User.find({
      role: "standard-admin",
      status: "approved",
      lastActive: { $gte: oneMinutesAgo },
    }).select("-password");

    res.json(onlineAdmins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//delete standard admin
export const deleteStandardAdmin = async (req, res) => {
  try {
    const admin = await User.findById(req.params.id);

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Ensure it's a standard-admin
    if (admin.role !== "standard-admin") {
      return res.status(400).json({
        message: "You can only delete standard admins",
      });
    }

    // Prevent deleting yourself (important)
    if (admin._id.toString() === req.user._id.toString()) {
      return res.status(400).json({
        message: "You cannot delete your own account",
      });
    }

    await User.findByIdAndDelete(req.params.id);

    res.json({ message: "Standard admin deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// mark application as under review (admin action)
export const markUnderReview = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);

    if (!app) return res.status(404).json({ message: "Not found" });

    if (!canTransition(app.status, "under_review")) {
      return res.status(400).json({ message: "Invalid transition" });
    }

    app.status = "under_review";
    app.reviewedBy = req.user.id;

    await app.save();

    res.json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// mark application as approved (admin action)
export const approveApplication = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);

    if (!app) return res.status(404).json({ message: "Not found" });

    if (!canTransition(app.status, "approved")) {
      return res.status(400).json({ message: "Invalid transition" });
    }

    app.status = "approved";
    app.reviewedBy = req.user.id;
    app.reviewedAt = new Date();

    await app.save();

    res.json({ message: "Application approved", app });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// mark application as rejected (admin action)
export const rejectApplication = async (req, res) => {
  try {
    const { reason } = req.body;

    if (!reason) {
      return res.status(400).json({ message: "Rejection reason required" });
    }

    const app = await Application.findById(req.params.id);

    if (!app) return res.status(404).json({ message: "Not found" });

    if (!canTransition(app.status, "rejected")) {
      return res.status(400).json({ message: "Invalid transition" });
    }

    app.status = "rejected";
    app.reviewedBy = req.user.id;
    app.reviewedAt = new Date();
    app.rejectionReason = reason;

    await app.save();

    res.json({ message: "Application rejected", app });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
