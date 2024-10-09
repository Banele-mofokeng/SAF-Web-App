import React, { useState, useEffect } from 'react'
import AccommodationCard from './AccommodationCard'
import SearchTool from './SearchTool'

// ... (keep the existing interfaces and initialAccommodations)

const AccommodationList: React.FC = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>(initialAccommodations)
  const [filteredAccommodations, setFilteredAccommodations] = useState<Accommodation[]>(initialAccommodations)

  const handleSearch = (campus: string, maxDistance: number) => {
    const filtered = accommodations.filter(
      (accommodation) =>
        accommodation.campus === campus && accommodation.distance <= maxDistance
    )
    setFilteredAccommodations(filtered)
  }

  return (
    <div className="container mx-auto px-4">
      <SearchTool onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAccommodations.map((accommodation) => (
          <AccommodationCard key={accommodation.id} accommodation={accommodation} />
        ))}
      </div>
      {filteredAccommodations.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No accommodations found matching your criteria.</p>
      )}
    </div>
  )
}

export default AccommodationList