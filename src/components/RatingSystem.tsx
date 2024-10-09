import React, { useState } from 'react'
import { Star } from 'lucide-react'

interface RatingSystemProps {
  initialRating: number
  onSubmit: (rating: number, comment: string) => void
}

const RatingSystem: React.FC<RatingSystemProps> = ({ initialRating, onSubmit }) => {
  const [rating, setRating] = useState(initialRating)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(rating, comment)
    setComment('')
    setRating(0)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="focus:outline-none"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              size={24}
              className={`${
                star <= (hover || rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
              } transition-colors duration-150`}
            />
          </button>
        ))}
      </div>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Leave a comment..."
        className="w-full p-2 border rounded-md"
        rows={3}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        disabled={rating === 0 || comment.trim() === ''}
      >
        Submit Review
      </button>
    </form>
  )
}

export default RatingSystem