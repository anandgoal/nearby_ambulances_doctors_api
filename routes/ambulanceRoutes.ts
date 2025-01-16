import express from 'express';
import {
  getAllAmbulances,
  getAmbulanceById,
  createAmbulance,
  updateAmbulance,
  deleteAmbulance,
} from '../controllers/ambulanceController';

const router = express.Router();

router.get('/list', getAllAmbulances);
router.get('/:id', getAmbulanceById);
router.post('/add', createAmbulance);
router.put('/edit/:id', updateAmbulance);
router.delete('delete/:id', deleteAmbulance);

export default router;
