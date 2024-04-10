// Dashboard.tsx
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';


const Dashboard = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const userDataFromStorage = localStorage.getItem('userData');
    if (userDataFromStorage) {
      const parsedUserData = JSON.parse(userDataFromStorage);
      setUserEmail(parsedUserData[0].u_email);
      setUserName(parsedUserData[0].u_username);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container m-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">New album is released!</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Listen</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
