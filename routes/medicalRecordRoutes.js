const express = require("express");
const router = express.Router();
const {
  addData,
  getAllData,
  getById,
  updateData,
  deleteData,
} = require("../controllers/medicalRecordController");

router.post("/addData", addData);
router.get("/getAllData", getAllData);
router.get("/getDataById/:id", getById);
router.put("/updateData/:id", updateData);
router.delete("/deleteData/:id", deleteData);

module.exports = router;
