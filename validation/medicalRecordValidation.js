const Joi = require("joi");

// Fungsi validasi untuk penambahan data rekam medis
const createValidation = (data) => {
  const medicalRecordSchema = Joi.object({
    namaPasien: Joi.string().required(),
    idPasien: Joi.string().alphanum().required(),
    tanggalPengobatan: Joi.date().iso().required(),
    keluhan: Joi.array().items(Joi.string()).min(1).required(),
    resepObat: Joi.array().items(Joi.string()).min(1).required(),
    biaya: Joi.number().required(),
    menggunakanAsuransi: Joi.boolean().default(false),
    namaAsuransi: Joi.string().default(null),
    biayaYangDicoverAsuransi: Joi.number().default(0),
  });

  return medicalRecordSchema.validate(data);
};

module.exports = {
  createValidation,
};
