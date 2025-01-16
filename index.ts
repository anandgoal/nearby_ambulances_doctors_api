import express, { Request, Response } from 'express';
const cors = require('cors');

import ambulanceRoutes from './routes/ambulanceRoutes';
import doctorRoutes from './routes/doctorRoutes';
const app = express();
// Middleware
app.use(express.json());
app.use(cors()); // This allows requests from any origin

const PORT = process.env.PORT || 5000;

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('API is running');
});
app.use('/api/ambulances', ambulanceRoutes);
app.use('/api/doctors', doctorRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));