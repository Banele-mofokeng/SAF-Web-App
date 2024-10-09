import React from 'react'
import { Link } from 'react-router-dom'
import { Bookmark, MessageCircle } from 'lucide-react'

const StudentProfile: React.FC = () => {
  // ... (keep the existing mock data)

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Bookmark className="mr-2" /> Saved Accommodations
          </h2>
          <ul className="space-y-2">
            {savedAccommodations.map((accommodation) => (
              <li key={accommodation.id}>
                <Link to={`/accommodation/${accommodation.id}`} className="text-blue-600 hover:underline">
                  {accommodation.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <MessageCircle className="mr-2" /> Recent Chats
          </h2>
          <ul className="space-y-4">
            {chats.map((chat) => (
              <li key={chat.id} className="border-b pb-2">
                <Link to={`/chat/${chat.id}`} className="block hover:bg-gray-50">
                  <p className="font-medium">{chat.landlordName}</p>
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

export default StudentProfile