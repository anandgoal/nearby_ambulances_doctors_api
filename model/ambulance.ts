export interface Ambulance {
    id: number;
    title: string;
    description: string;
    location: string;
    image?: string;
  }
  
  export let ambulances: Ambulance[] = [
    { id: 1, title: 'Yadav Ambulance', description: 'Yadav Ambulance Emergency Services', location: 'Agra', image: '' },
    { id: 2, title: 'Rana Ambulance', description: 'Ambulance Hospital Ambulance', location: 'Agra', image: '' },
    { id: 3, title: 'Delhi Ambulance', description: 'Delhi Hospital Ambulance', location: 'Delhi', image: '' },
    { id: 4, title: 'Gurugram Ambulance', description: 'Gurugram Ambulance', location: 'Gurugram', image: '' },
    { id: 5, title: 'Manesar Ambulance', description: 'Manesar Ambulance', location: 'Manesar', image: '' },
  ];
  