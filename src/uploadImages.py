import os
import pymongo
from gridfs import GridFS

# MongoDB connection information
mongo_uri = "mongodb://localhost:27017"
database_name = "PokeShop"
collection_name = "cards"

# Define the path to the "images" folder
images_folder = "images"

# Connect to MongoDB
client = pymongo.MongoClient(mongo_uri)
db = client[database_name]

# Create a GridFS object to store images
fs = GridFS(db, collection=collection_name)

# Check if the folder exists
if os.path.exists(images_folder):
    # List all files in the "images" folder
    image_files = os.listdir(images_folder)

    # Loop through each image file and upload it to MongoDB if it doesn't already exist
    for file in image_files:
        # Check if the file already exists in the database
        if fs.exists(filename=file):
            print(f"'{file}' already exists in the database. Skipping.")
        else:
            # Open the image file and read its binary data
            with open(os.path.join(images_folder, file), 'rb') as image_file:
                # Insert the image data into the GridFS collection
                fs.put(image_file, filename=file)
            print(f"Uploaded '{file}' to MongoDB.")

    print("All images processed.")
else:
    print(f"The '{images_folder}' folder does not exist.")

# Close the MongoDB connection
client.close()