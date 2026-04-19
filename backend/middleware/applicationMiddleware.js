import Application from "../model/Application.js";

export const preventDuplicateApplication = async (req, res, next) => {
  const { email, phone, identificationNumber } = req.body;

  try {
    const existing = await Application.findOne({
      $or: [{ email }, { phone }, { identificationNumber }],
    });

    if (existing) {
      return res.status(400).json({
        message: "Application with this email/phone/ID already exists",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
