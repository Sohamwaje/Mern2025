const Support = require("../models/support-model");

const supportForm = async (req, res) => {
  try {
    // Get the request body data
    const response = req.body;
    console.log("Request body received:", response);

    // Validate request body (for example, check if required fields exist)
    if (!response.Name || !response.Contact || !response.Issue) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create the new Support entry
    await Support.create(response);
    console.log("Device successfully created");

    // Return success response
    return res.status(200).json({ message: "Device successfully added" });

  } catch (error) {
    console.error("Error creating device:", error);
    return res.status(500).json({ message: "Device adding failed", error: error.message });
  }
};

module.exports = supportForm;
