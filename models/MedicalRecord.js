const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  namaPasien: {
    type: String,
    required: true,
  },
  idPasien: {
    type: String,
    required: true,
    unique: true,
  },
  tanggalPengobatan: {
    type: Date,
    required: true,
  },
  keluhan: {
    type: [String],
    required: true,
  },
  resepObat: {
    type: [String],
    required: true,
  },
  biaya: {
    type: Number,
    required: true,
  },
  menggunakanAsuransi: {
    type: Boolean,
    default: false,
  },
  namaAsuransi: {
    type: String,
    default: null,
  },
  biayaYangDicoverAsuransi: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
