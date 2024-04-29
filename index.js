const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

const connectToDatabase = require("./config/database");
connectToDatabase();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const medicalRecordRoute = require("./routes/medicalRecordRoutes");

app.use("/rekammedis", medicalRecordRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
