import React from "react";
import DataTable from 'datatables.net-dt';
const EmployeeTable = () => {

  let table = new DataTable('#myTable');

  const employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', position: 'Manager' },
    // เพิ่มข้อมูลของพนักงานอื่น ๆ ที่คุณต้องการ
  ];
  return (
    <div>
      <table className="table table-hover table-striped table-mobile-responsive table-mobile-sided display" id="myTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>position</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{employee.position}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>email</th>
            <th>phone</th>
            <th>position</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default EmployeeTable;