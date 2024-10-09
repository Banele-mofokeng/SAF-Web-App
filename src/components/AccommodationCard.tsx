import React from 'react'
import { Link } from 'react-router-dom'
import { Star, MapPin } from 'lucide-react'

interface Accommodation {
  id: number
  name: string
  rooms: number
  amenities: string[]
  images: string[]
  distance: number
  rating: number
  price: number
  landlordId: string
}

interface AccommodationCardProps {
  accommodation: Accommodation
}

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  return (
    <Link to={`/property/${accommodation.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
        <img src={accommodation.images[0]} alt={accommodation.name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{accommodation.name}</h3>
          <p className="text-gray-600 mb-2">{accommodation.rooms} rooms</p>
          <div className="flex items-center mb-2">
            <MapPin size={16} className="text-gray-500 mr-1" />
            <span className="text-sm text-gray-500">{accommodation.distance} km from campus</span>
          </div>
          <div className="flex items-center mb-2">
            <Star size={16} className="text-yellow-500 mr-1" />
            <span className="text-sm">{accommodation.rating.toFixed(1)}</span>
          </div>
          <p className="text-lg font-bold mb-2">${accommodation.price}/month</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {accommodation.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
            {accommodation.amenities.length > 3 && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                +{accommodation.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default AccommodationCard