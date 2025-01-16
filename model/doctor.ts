export interface Doctor {
    id: number;
    title: string;
    description: string;
    location: string;
    image?: string;
  }
  
  export let doctors: Doctor[] = [
    { id: 1, title: 'Dr. Teja', description: 'Cardiologist', location: 'Agra', image: '' },
    { id: 2, title: 'Dr. Seema', description: 'Neurologist', location: 'Delhi', image: '' },
    { id: 3, title: 'Dr. Anjali', description: 'Neurologist', location: 'Gurugram', image: '' },
    { id: 4, title: 'Dr. Payal', description: 'Neurologist', location: 'Delhi', image: '' },
    { id: 5, title: 'Dr. Nupur', description: 'Neurologist', location: 'Delhi', image: '' },
  ];