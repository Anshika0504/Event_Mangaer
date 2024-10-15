import { Message } from "../models/messageSchema.js";

export const sendMessage = async (req, resp) => {
  try {
    const { name, email, subject, message } = req.body;

    // Check if all fields are provided
    if (!name || !email || !subject || !message) {
      return resp.status(400).json({ message: "All fields are required" });
    }

    // Create the message in the database
    await Message.create({ name, email, subject, message });
    
    resp.status(200).json({
      success: true,
      message: "Message sent successfully"
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = "";

      // Constructing specific error messages based on the validation errors
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " ";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " "; // Fixed this part
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + " ";
      }

      return resp.status(400).json({
        success: false,
        message: errorMessage.trim() // Trim any trailing spaces
      });
    }

    // Catch-all for unknown errors
    resp.status(500).json({
      success: false,
      message: "An unknown error occurred"
    });
  }
};
