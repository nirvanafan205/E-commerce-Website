const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/PokeShop");

const Image = require("./models/image"); // Import the Image model

// Create an API endpoint to get image data from the database
app.get("/api/images", async (req, res) => {
  try {
    const images = await Image.find({}, "name data contentType"); // Fetch image data from the database

    const imagesWithBase64 = images.map((image) => ({
      name: image.name,
      contentType: image.contentType,
      data: image.data.toString("base64"), // Convert image data to base64
    }));

    res.json(imagesWithBase64);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});