const MedicalRecord = require("../models/MedicalRecord");
const { responseDefault } = require("../utils/responseMessage");

// Fungsi untuk menambahkan data rekam medis
const addData = async (req, res) => {
  try {
    // Periksa apakah data dengan ID pasien yang sama sudah ada
    const dataExist = await MedicalRecord.findOne({
      idPasien: req.body.idPasien,
    });

    if (dataExist) {
      return res.status(400).json({
        message: responseDefault.DATA_EXIST,
      });
    }

    // Tambahkan data rekam medis ke database
    const response = await MedicalRecord.create(req.body);
    res.status(201).json({
      message: responseDefault.CREATED_DATA,
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: responseDefault.INTERNAL_SERVER_ERROR,
    });
  }
};

// Fungsi untuk mendapatkan semua data rekam medis
const getAllData = async (req, res) => {
  try {
    const response = await MedicalRecord.find();
    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: responseDefault.INTERNAL_SERVER_ERROR,
    });
  }
};

// Fungsi untuk mendapatkan data rekam medis berdasarkan ID
const getById = async (req, res) => {
  try {
    // Cari data rekam medis berdasarkan ID
    const record = await MedicalRecord.findById(req.params.id);
    if (!record) {
      return res.status(404).json({
        message: responseDefault.ID_NOT_FOUND,
      });
    }
    res.status(200).json({
      data: record,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: responseDefault.INTERNAL_SERVER_ERROR,
    });
  }
};

// Fungsi untuk mengupdate data rekam medis berdasarkan ID
const updateData = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  try {
    // Update data rekam medis berdasarkan ID
    const updatedRecord = await MedicalRecord.findByIdAndUpdate(id, body, {
      new: true, // Mengembalikan data rekam medis yang sudah diupdate
    });
    if (!updatedRecord) {
      return res.status(404).json({
        message: responseDefault.ID_NOT_FOUND,
      });
    }
    res.status(200).json({
      message: responseDefault.UPDATED_DATA,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: responseDefault.INTERNAL_SERVER_ERROR,
    });
  }
};

// Fungsi untuk menghapus data rekam medis berdasarkan ID
const deleteData = async (req, res) => {
  try {
    // Hapus data rekam medis berdasarkan ID
    const deletedRecord = await MedicalRecord.findByIdAndDelete(req.params.id);
    if (!deletedRecord) {
      return res.status(404).json({
        message: responseDefault.ID_NOT_FOUND,
      });
    }
    res.status(200).json({
      message: responseDefault.DELETED_DATA,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: responseDefault.INTERNAL_SERVER_ERROR,
    });
  }
};

module.exports = {
  addData,
  getAllData,
  getById,
  updateData,
  deleteData,
};
