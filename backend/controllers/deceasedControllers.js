import Application from "../models/Application.js";

export const updateDeceasedInfo = async (req, res) => {
  try {
    const { id } = req.params;

    // 1. Find application
    const application = await Application.findById(id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // 2. Check ownership (CRITICAL)
    if (application.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "Not authorized",
      });
    }

    // 3. Extract ONLY allowed fields (avoid req.body dump)
    const {
      deceasedName,
      dateOfDeath,
      placeOfDeath,
      dateOfMarriage,
      spouse,
      occupationAndPlaceOfWork,
      formOfMarriage,
      identification,
      lastAddress,
      nextOfKin,
      children,
      minorChildrenSummary,
      guardianDetails,
      family,
      bankAccounts,
      assets,
      sureties,
    } = req.body;

    // 4. Initialize if not exists
    if (!application.deceased) {
      application.deceased = {};
    }

    // 5. Update fields (ONLY if provided)
    if (deceasedName !== undefined)
      application.deceased.deceasedName = deceasedName;

    if (dateOfDeath !== undefined)
      application.deceased.dateOfDeath = dateOfDeath;

    if (placeOfDeath !== undefined)
      application.deceased.placeOfDeath = placeOfDeath;

    if (dateOfMarriage !== undefined)
      application.deceased.dateOfMarriage = dateOfMarriage;

    if (spouse !== undefined)
      application.deceased.spouse = spouse;

    if (occupationAndPlaceOfWork !== undefined)
      application.deceased.occupationAndPlaceOfWork =
        occupationAndPlaceOfWork;

    if (formOfMarriage !== undefined)
      application.deceased.formOfMarriage = formOfMarriage;

    if (identification !== undefined)
      application.deceased.identification = identification;

    if (lastAddress !== undefined)
      application.deceased.lastAddress = lastAddress;

    if (nextOfKin !== undefined)
      application.deceased.nextOfKin = nextOfKin;

    if (children !== undefined)
      application.deceased.children = children;

    if (minorChildrenSummary !== undefined)
      application.deceased.minorChildrenSummary =
        minorChildrenSummary;

    if (guardianDetails !== undefined)
      application.deceased.guardianDetails = guardianDetails;

    if (family !== undefined)
      application.deceased.family = family;

    if (bankAccounts !== undefined)
      application.deceased.bankAccounts = bankAccounts;

    if (assets !== undefined)
      application.deceased.assets = assets;

    if (sureties !== undefined)
      application.deceased.sureties = sureties;

    // 6. Save
    await application.save();

    res.status(200).json({
      success: true,
      message: "Deceased information updated successfully",
      data: application.deceased,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};