import React from 'react';

const AllUsers = () => {
  // Sample data for demonstration
  const users = [
    { id: 1, fullName: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, fullName: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, fullName: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    // Add more users as needed
  ];

  const handleDeleteUser = (userId) => {
    // Implement delete user functionality here
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <div className='w-[80%] h-auto ml-[20%] mt-[63px] p-5'>
      <h2 className='text-2xl font-bold mb-4'>All Users</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-10%'>
                User ID
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-25%'>
                Full Name
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-30%'>
                Email
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-20%'>
                Role
              </th>
              <th scope='col' className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {users.map((user) => (
              <tr key={user.id}>
                <td className='px-6 py-4 whitespace-nowrap'>{user.id}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.fullName}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.email}</td>
                <td className='px-6 py-4 whitespace-nowrap'>{user.role}</td>
                <td className='px-6 py-4 whitespace-nowrap'>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className='text-red-500 hover:text-red-700 font-medium focus:outline-none'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
