import React from 'react'

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-16 py-3 px-4 uppercase font-semibold text-sm">Select</th>
            <th className="w-16 py-3 px-4 uppercase font-semibold text-sm">ID</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Phone Number</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Email</th>
            <th className="py-3 px-4 uppercase font-semibold text-sm">Hobbies</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        {/* <tbody className="text-gray-700">
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className="text-center py-3 px-4">
                <input type="checkbox" onChange={() => onSelect(user)} />
              </td>
              <td className="text-center py-3 px-4">{index + 1}</td>
              <td className="text-left py-3 px-4">{user.name}</td>
              <td className="text-left py-3 px-4">{user.phoneNumber}</td>
              <td className="text-left py-3 px-4">{user.email}</td>
              <td className="text-left py-3 px-4">{user.hobbies}</td>
              <td className="text-center py-3 px-4">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-800 ml-4"
                  onClick={() => onDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  )
}

export default Table