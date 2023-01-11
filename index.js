const Files = require("files.com/lib/Files").default; // for Authentication
const File = require("files.com/lib/models/File").default; // for File access

const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

require("dotenv").config();
const apiKey = `${process.env.API_KEY}`;
const baseURL = `${process.env.BASE_URL}`;
Files.setApiKey(apiKey);
Files.setBaseUrl(baseURL);

const uploadFile = async () => {
    try {
        const file = await File.uploadFile("test.txt", "test.txt", {
            path: baseURL,
            http_method: "POST",
            action: "put",
        });
        console.log(file.isLoaded()); // checks if file is loaded
        console.log(file); // logs the file object to the console
    } catch (error) {}
};
console.log(uploadFile());
