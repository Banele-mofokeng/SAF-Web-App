import React from 'react'
import { Link } from 'react-router-dom'
import { Home, MessageCircle } from 'lucide-react'

const LandlordProfile: React.FC = () => {
  // Mock data for landlord's accommodations and chats
  const accommodations = [
    { id: 1, name: 'Sunny Student Loft', occupancy: '2/3' },
    { id: 2, name: 'Campus View Apartments', occupancy: '4/4' },
  ]

  const chats = [
    { id: 1, studentName: 'Alice Johnson', lastMessage: 'Is the room still available?' },
    { id: 2, studentName: 'Bob Williams', lastMessage: 'When can I schedule a viewing?' },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Landlord Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Home className="mr-2" /> Your Accommodations
          </h2>
          <ul className="space-y-4">
            {accommodations.map((accommodation) => (
              <li key={accommodation.id} className="flex justify-between items-center">
                <Link to={`/accommodation/${accommodation.id}`} className="text-blue-600 hover:underline">
                  {accommodation.name}
                </Link>
                <span className="text-sm text-gray-600">Occupancy: {accommodation.occupancy}</span>
              </li>
            ))}
          </ul>
          <Link to="/add-accommodation" className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Add New Accommodation
          </Link>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="mr-2" /> Recent Inquiries
          </h2>
          <ul className="space-y-4">
            {chats.map((chat) => (
              <li key={chat.id} className="border-b pb-2">
                <Link to={`/chat/${chat.id}`} className="block hover:bg-gray-50">
                  <p className="font-medium">{chat.studentName}</p>
                  <p className="text-sm text-gray-600">{chat.lastMessage}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LandlordProfile