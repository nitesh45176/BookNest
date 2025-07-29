import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();
 const handleLogout = () => {
  try {
    setAuthUser(null); // Clear the auth context
    toast.success("Logged out successfully");
    window.location.reload(); // Reload to reflect changes if needed
  } catch (error) {
    toast.error("Failed to log out");
  }
};

  return (
    <div>
      <button onClick={handleLogout} className='ml-2 px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer hover:bg-red-600 transition duration-200'>
        Logout
      </button>
    </div>
  )
}

export default Logout