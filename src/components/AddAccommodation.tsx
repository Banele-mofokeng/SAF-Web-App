import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddAccommodation: React.FC = () => {
  const [name, setName] = useState('')
  const [rooms, setRooms] = useState('')
  const [price, setPrice] = useState('')
  const [amenities, setAmenities] = useState('')
  const [distance, setDistance] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement API call to add accommodation
    console.log('Accommodation added:', { name, rooms, price, amenities, distance })
    navigate('/landlord-profile')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Add New Accommodation</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Accommodation Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rooms" className="block mb-2">Number of Rooms</label>
          <input
            type="number"
            id="rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">Price per Month</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="amenities" className="block mb-2">Amenities (comma-separated)</label>
          <input
            type="text"
            id="amenities"
            value={amenities}
            onChange={(e) => setAmenities(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="distance" className="block mb-2">Distance from Campus (km)</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add Accommodation
        </button>
      </form>
    </div>
  )
}

export default AddAccommodation