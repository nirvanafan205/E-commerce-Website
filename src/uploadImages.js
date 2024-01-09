const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const app = express();

// Configure your MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/PokeShop", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Define a schema for your image data
const imageSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
  contentType: String,
});

const Image = mongoose.model("Image", imageSchema);

// Specify the directory where your images are located
const imageDirectory = path.join(__dirname, "images");

// Read and upload all images from the directory
fs.readdir(imageDirectory, async (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  const promises = files.map(async (file) => {
    const imagePath = path.join(imageDirectory, file);
    const imageBuffer = fs.readFileSync(imagePath);

    // Determine the content type based on the file extension
    let contentType = "image/jpeg"; // Default to JPEG
    if (file.endsWith(".png")) {
      contentType = "image/png";
    }

    const image = new Image({
      name: file,
      data: imageBuffer,
      contentType: contentType,
    });

    try {
      await image.save();
      console.log(`Uploaded ${file}`);
    } catch (error) {
      console.error(`Error uploading ${file}: ${error}`);
    }
  });

  // Wait for all promises to complete before exiting the program
  await Promise.all(promises);

  console.log("All images uploaded. Exiting the program.");
  process.exit(0); // Exit the program gracefully
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
