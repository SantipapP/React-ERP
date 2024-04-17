// HR/Dashboard.tsx
import React from 'react';
import Navbar from '../Navbar'; // ต้องการแก้ไขเพื่อให้ตรงกับโค้ดของคุณ
import Chart from 'chart.js/auto';
import DepartmentEmployeeChart from './DepartmentEmployeeChart';
import EmployeeTable from './EmployeeTable';

const HRDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center py-2 px-2 sm:px-6 lg:px-8">
        {/* <div className="max-w-xs w-full space-y-8 m-5">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">จำนวนพนักงาน</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">50</span>
              <span className="text-gray-500">คน</span>
            </div>
          </div>
        </div>
        <div className="max-w-xs w-full space-y-8 m-5">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">จำนวนใบลาหยุด</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">50</span>
              <span className="text-gray-500">ใบ</span>
            </div>
          </div>
        </div>
        <div className="max-w-xs w-full space-y-8 m-5">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-medium mb-2">จำนวนใบลาออก</h3>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold">50</span>
              <span className="text-gray-500">ใบ</span>
            </div>
          </div>
        </div> */}
      </div>
      <div className="flex flex-wrap justify-center py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xxxl justify-center w-100 space-y-8 m-5">
          <div className="bg-white shadow-md rounded-lg p-4">
            <EmployeeTable/>
          </div>
        </div>
        <div className="max-w-3xl w-full space-y-8 m-5">
          <div className="bg-white shadow-md rounded-lg p-4">
            <DepartmentEmployeeChart/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
