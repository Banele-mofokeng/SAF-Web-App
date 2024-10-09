import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, MessageCircle, Star } from 'lucide-react'
import RatingSystem from './RatingSystem'
import CommentItem from './CommentItem'

// ... (keep the existing interfaces and state)

const PropertyDetails: React.FC = () => {
  // ... (keep the existing state and functions)

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-64 sm:h-96">
        <img
          src={property.images[currentImageIndex]}
          alt={`${property.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full"
        >
          <ChevronRight size={20} />
        </button>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {property.images.map((_, index) => (
            <span
              key={index}
              className={`inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{property.name}</h1>
        <p className="text-gray-600 mb-4">{property.description}</p>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <div className="flex items-center mb-2 sm:mb-0">
            <Star className="text-yellow-400 mr-1" size={20} />
            <span className="font-semibold">{property.rating.toFixed(1)}</span>
          </div>
          <span className="text-2xl font-bold">${property.price}/month</span>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <ul className="list-disc list-inside">
            <li>{property.rooms} rooms</li>
            <li>{property.distance} km from campus</li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Amenities</h2>
          <div className="flex flex-wrap gap-2">
            {property.amenities.map((amenity, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                {amenity}
              </span>
            ))}
          </div>
        </div>
        <Link
          to={`/chat/${property.landlordId}`}
          className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
        >
          <MessageCircle size={20} className="mr-2" />
          Message Landlord
        </Link>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Leave a Review</h2>
          <RatingSystem initialRating={0} onSubmit={handleRatingSubmit} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
          {comments.map(comment => (
            <CommentItem
              key={comment.id}
              comment={comment}
              isLandlord={false}
              onReply={handleReply}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PropertyDetails