import { Request, Response } from 'express';
import { doctors, Doctor } from '../model/doctor';

// GET all doctors
export const getAllDoctors = (req: Request, res: Response) => {
 
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedDoctors = doctors.slice(startIndex, endIndex);

    if (paginatedDoctors.length === 0) {
        res.status(404).json({ message: "No ambulances found for this page." });
    }

    res.status(200).json({
        page,
        limit,
        totalRecords: doctors.length,
        totalPages: Math.ceil(doctors.length / limit),
        data: paginatedDoctors,
      });
};

// GET doctor by id
export const getDoctorById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const doctor = doctors.find((doc) => doc.id === id);
  if (doctor) {
    res.status(200).json(doctor);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
};

// POST create new doctor
export const createDoctor = (req: Request, res: Response) => {
  const { title, description, location, image }: Doctor = req.body;
  const newDoctor: Doctor = {
    id: doctors.length + 1,
    title,
    description,
    location,
    image,
  };
  doctors.push(newDoctor);
  res.status(201).json(newDoctor);
};

// PUT update doctor
export const updateDoctor = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, description, location, image }: Doctor = req.body;
  const index = doctors.findIndex((doc) => {
    //console.log(`Checking doc.id: ${typeof(doc.id)}, Target id: ${typeof(id)}`);
    return doc.id === id;
  });
  if (index !== -1) {
    doctors[index] = { id, title, description, location, image };
    res.status(200).json(doctors[index]);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
};

// DELETE doctor
export const deleteDoctor = (req: Request, res: Response) => {
  
  const id = req.params.id;
  const index = doctors.findIndex((doc) => {
    //console.log(`Checking doc.id: ${typeof(doc.id)}, Target id: ${typeof(id)}`);
    return doc.id === parseInt(id);
  });
  
  if (index !== -1) {
    doctors.splice(index, 1);
    res.status(200).send();
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
};
