// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';


const Dashboard = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Dashboard;
