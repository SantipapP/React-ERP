import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const DepartmentEmployeeChart: React.FC = () => {
  // ข้อมูลแบบสมมติเพื่อใช้ในการสร้างกราฟ
  const departmentEmployeesData = [
    { department: 'HR&Admin', employees: 50 },
    { department: 'Finance', employees: 40 },
    { department: 'Purchasing', employees: 6 },
    { department: 'Operation', employees: 55 },
    { department: 'Control', employees: 45 },
    { department: 'Planning', employees: 45 },
    { department: 'Facility', employees: 45 },
    { department: 'Equipment', employees: 45 },
    { department: 'Document', employees: 45 },
    { department: 'Engineering', employees: 45 }
  ];

  useEffect(() => {
    // รวมข้อมูล
    const departments = departmentEmployeesData.map(data => data.department);
    const employeeCounts = departmentEmployeesData.map(data => data.employees);

    // เลือก Canvas element
    const canvas = document.getElementById('departmentEmployeesChart');
    if (!canvas) {
      console.error("Canvas element with id 'departmentEmployeesChart' not found!");
      return;
    }

    const ctx = (canvas as HTMLCanvasElement).getContext('2d');

    // สร้างกราฟแท่ง
    const chart = new Chart(ctx!, {
      type: 'bar',
      data: {
        labels: departments,
        datasets: [{
          label: 'จำนวนพนักงาน',
          data: employeeCounts,
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 10 // กำหนดขนาดขั้นของแกน y
            }
          }
        }
      }
    });

    // คืนการยกเลิกตัวอย่าง
    return () => {
      chart.destroy();
    };
  }, []); // ทำงานเมื่อคอมโพเนนต์ถูก mount เพียงครั้งเดียว

  return (
    <div className='w-50 h-25' >
      <canvas id="departmentEmployeesChart"></canvas>
    </div>
  );
};

export default DepartmentEmployeeChart;
