const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");

const contacts = require("./routes/api/contacts");

const app = express();

// Connect Database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use("/api/contacts", contacts);

const port = process.env.PORT || 3006;

app.listen(port, () => console.log(`Server running on port ${port}`));

__dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});