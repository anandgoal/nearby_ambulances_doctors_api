import express, { Request, Response } from 'express';
import { ambulances, Ambulance } from '../model/ambulance';

// GET all ambulances
export const getAllAmbulances = (req: Request, res: Response) => {

    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const paginatedAmbulances = ambulances.slice(startIndex, endIndex);

    if (paginatedAmbulances.length === 0) {
        res.status(404).json({ message: "No ambulances found for this page." });
    }

    res.status(200).json({
        page,
        limit,
        totalRecords: ambulances.length,
        totalPages: Math.ceil(ambulances.length / limit),
        data: paginatedAmbulances,
      });

};

// GET ambulance by id
export const getAmbulanceById = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const ambulance = ambulances.find((amb) => amb.id === id);
  if (ambulance) {
    res.status(200).json(ambulance);
  } else {
    res.status(404).json({ message: 'Ambulance not found' });
  }
};

// POST create new ambulance
export const createAmbulance = (req: Request, res: Response) => {
  const { title, description, location, image }: Ambulance = req.body;
  const newAmbulance: Ambulance = {
    id: ambulances.length + 1,
    title,
    description,
    location,
    image,
  };
  ambulances.push(newAmbulance);
  res.status(201).json(newAmbulance);
};

// PUT update ambulance
export const updateAmbulance = (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { title, description, location, image }: Ambulance = req.body;
  const index = ambulances.findIndex((amb) => {
      //console.log(`Checking doc.id: ${typeof(doc.id)}, Target id: ${typeof(id)}`);
      return amb.id === id;
    });
  if (index !== -1) {
    ambulances[index] = { id, title, description, location, image };
    res.status(200).json(ambulances[index]);
  } else {
    res.status(404).json({ message: 'Ambulance not found' });
  }
};

// DELETE ambulance
export const deleteAmbulance = (req: Request, res: Response) => {
  const id = req.params.id;
  const index = ambulances.findIndex((amb) => {
      //console.log(`Checking doc.id: ${typeof(doc.id)}, Target id: ${typeof(id)}`);
      return amb.id === parseInt(id);
    });
  if (index !== -1) {
    ambulances.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Ambulance not found' });
  }
};
