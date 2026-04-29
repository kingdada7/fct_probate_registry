import Application from "../model/application.js";

export const createApplication = async (req, res) => {
  try {
    const application = await Application.create({
      user: req.user.id,
      applicant: req.body.applicant,
      deceased: req.body.deceased,
      applicationType: req.body.applicationType,
      status: "draft",
    });

    res.status(201).json(application);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateApplication = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id);

    if (!app) return res.status(404).json({ message: "Not found" });

    //  Only owner
    if (app.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    //  Only draft editable
    if (app.status !== "draft") {
      return res.status(400).json({ message: "Only draft can be edited" });
    }

    Object.assign(app, req.body);

    await app.save();

    res.json(app);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const submitApplication = async (req, res) => {
  try {
    const app = await Application.findById(req.params.id).populate(
      "documentsUpload",
    );

    if (!app) return res.status(404).json({ message: "Not found" });

    if (app.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    // transition check
    if (!canTransition(app.status, "submitted")) {
      return res.status(400).json({ message: "Invalid status transition" });
    }

    // documents must be ready
    if (!app.documentsUpload || app.documentsUpload.status !== "submitted") {
      return res.status(400).json({ message: "Upload documents first" });
    }

    app.status = "submitted";

    await app.save();

    res.json({ message: "Application submitted", app });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
