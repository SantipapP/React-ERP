// HR/Dashboard.tsx
import React from 'react';
import Navbar from '../Navbar'; // ต้องการแก้ไขเพื่อให้ตรงกับโค้ดของคุณ

const PUDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Purchasing Dashboard</h2>
            {/* เพิ่มเนื้อหา Dashboard ของแผนก HR ตามต้องการ */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PUDashboard;
