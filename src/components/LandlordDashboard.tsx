import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PlusCircle, MessageCircle } from 'lucide-react'
import CommentItem from './CommentItem'

interface Accommodation {
  id: number
  name: string
  occupancy: string
  pendingInquiries: number
}

interface Comment {
  id: string
  userId: string
  username: string
  rating: number
  text: string
  date: string
  replies?: Reply[]
}

interface Reply {
  id: string
  userId: string
  username: string
  text: string
  date: string
}

const LandlordDashboard: React.FC = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([])
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    // Fetch accommodations data
    const fetchAccommodations = async () => {
      // TODO: Replace with actual API call
      const mockAccommodations: Accommodation[] = [
        { id: 1, name: 'Sunny Apartment', occupancy: '2/3', pendingInquiries: 5 },
        { id: 2, name: 'Cozy Studio', occupancy: '1/1', pendingInquiries: 2 },
        { id: 3, name: 'Spacious Loft', occupancy: '3/4', pendingInquiries: 8 },
      ]
      setAccommodations(mockAccommodations)
    }

    // Fetch comments data
    const fetchComments = async () => {
      // TODO: Replace with actual API call
      const mockComments: Comment[] = [
        {
          id: '1',
          userId: 'user1',
          username: 'John Doe',
          rating: 4,
          text: 'Great place to stay!',
          date: '2023-04-15',
        },
        {
          id: '2',
          userId: 'user2',
          username: 'Jane Smith',
          rating: 5,
          text: 'Excellent accommodation and service.',
          date: '2023-04-14',
        },
      ]
      setComments(mockComments)
    }

    fetchAccommodations()
    fetchComments()
  }, [])

  const handleReply = (commentId: string, replyText: string) => {
    // TODO: Implement reply functionality
    console.log(`Reply to comment ${commentId}: ${replyText}`)
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">Landlord Dashboard</h1>
      <Link to="/add-accommodation" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6">
        <PlusCircle size={20} className="mr-2" />
        Add New Accommodation
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accommodation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending Inquiries</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {accommodations.map((accommodation) => (
                <tr key={accommodation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{accommodation.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{accommodation.occupancy}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{accommodation.pendingInquiries}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/chat/${accommodation.id}`} className="text-blue-600 hover:text-blue-900">
                      <MessageCircle size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Reviews</h2>
        {comments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            isLandlord={true}
            onReply={handleReply}
          />
        ))}
      </div>
    </div>
  )
}

export default LandlordDashboard