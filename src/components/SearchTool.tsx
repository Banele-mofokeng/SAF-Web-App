import React, { useState } from 'react'
import { Search } from 'lucide-react'

// ... (keep the existing interface and campuses array)

const SearchTool: React.FC<SearchToolProps> = ({ onSearch }) => {
  const [selectedCampus, setSelectedCampus] = useState('')
  const [maxDistance, setMaxDistance] = useState(5)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(selectedCampus, maxDistance)
  }

  return (
    <form onSubmit={handleSearch} className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
      <div className="mb-4">
        <label htmlFor="campus" className="block text-sm font-medium text-gray-700 mb-2">
          Select Campus
        </label>
        <select
          id="campus"
          value={selectedCampus}
          onChange={(e) => setSelectedCampus(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        >
          <option value="">Select a campus</option>
          {campuses.map((campus) => (
            <option key={campus} value={campus}>
              {campus}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-2">
          Max Distance (km): {maxDistance}
        </label>
        <input
          type="range"
          id="distance"
          min="1"
          max="20"
          value={maxDistance}
          onChange={(e) => setMaxDistance(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
      >
        <Search size={20} className="mr-2" />
        Search Accommodations
      </button>
    </form>
  )
}

export default SearchTool