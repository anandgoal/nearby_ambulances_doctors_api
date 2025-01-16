import express from 'express';
import {
  getAllDoctors,
  getDoctorById,
  createDoctor,
  updateDoctor,
  deleteDoctor,
} from '../controllers/doctorController';

const router = express.Router();

router.get('/list', getAllDoctors);
router.get('/:id', getDoctorById);
router.post('/add', createDoctor);
router.put('/edit/:id', updateDoctor);
router.delete('/delete/:id', deleteDoctor);

export default router;
