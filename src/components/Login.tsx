// Login.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // ป้องกันการรีโหลดหน้า


    console.log("Email:", email);
    console.log("Password:", password);
    const md5Password = CryptoJS.MD5(password).toString();
    

    try {
      // ส่งค่าอีเมลและรหัสผ่านไปยังเว็บ API
      const response = await axios.post('http://localhost:5210/SQL/ChkLogin', {
        u_email: email,
        u_password: md5Password
      });

      console.log(response);

      console.log(response.data.length);

      if (response.data.length>0) {
        // สมมติว่าการเข้าสู่ระบบสำเร็จ ให้เปลี่ยนเส้นทางไปยังหน้า Dashboard
        localStorage.setItem('userData', JSON.stringify(response.data));
        navigate('/dashboard');
      } else {
        // แสดงการแจ้งเตือน SweetAlert2 เมื่อเข้าสู่ระบบไม่สำเร็จ
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Invalid email or password!',
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      // แสดงการแจ้งเตือน SweetAlert2 เมื่อเกิดข้อผิดพลาดในการเชื่อมต่อ
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">React ERP Systems</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
