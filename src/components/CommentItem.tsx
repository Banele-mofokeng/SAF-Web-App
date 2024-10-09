import React, { useState } from 'react'
import { Star } from 'lucide-react'

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

interface CommentItemProps {
  comment: Comment
  isLandlord: boolean
  onReply: (commentId: string, replyText: string) => void
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, isLandlord, onReply }) => {
  const [replyText, setReplyText] = useState('')
  const [showReplyForm, setShowReplyForm] = useState(false)

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onReply(comment.id, replyText)
    setReplyText('')
    setShowReplyForm(false)
  }

  return (
    <div className="border-b pb-4 mb-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold mr-2">{comment.username}</span>
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              className={index < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500 ml-2">{comment.date}</span>
      </div>
      <p className="mb-2">{comment.text}</p>
      {isLandlord && !showReplyForm && (
        <button
          onClick={() => setShowReplyForm(true)}
          className="text-blue-500 hover:underline"
        >
          Reply
        </button>
      )}
      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="mt-2">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write your reply..."
            className="w-full p-2 border rounded-md"
            rows={2}
          />
          <button
            type="submit"
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
            disabled={replyText.trim() === ''}
          >
            Submit Reply
          </button>
        </form>
      )}
      {comment.replies && comment.replies.length > 0 && (
        <div className="ml-4 mt-2">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="border-t pt-2 mt-2">
              <div className="flex items-center">
                <span className="font-semibold mr-2">{reply.username}</span>
                <span className="text-sm text-gray-500">{reply.date}</span>
              </div>
              <p>{reply.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommentItem