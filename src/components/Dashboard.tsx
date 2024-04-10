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
      <div className="container m-20">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Card title!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
