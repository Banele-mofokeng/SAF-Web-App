import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import AccommodationList from './components/AccommodationList'
import Chat from './components/Chat'
import LandlordDashboard from './components/LandlordDashboard'
import AddAccommodation from './components/AddAccommodation'
import StudentProfile from './components/StudentProfile'
import LandlordProfile from './components/LandlordProfile'
import PropertyDetails from './components/PropertyDetails'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userType, setUserType] = useState<'student' | 'landlord' | null>(null)

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} userType={userType} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} />} />
            <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} setUserType={setUserType} />} />
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  userType === 'student' ? <AccommodationList /> : <LandlordDashboard />
                ) : (
                  <Navigate to="/signin" replace />
                )
              }
            />
            <Route
              path="/chat/:chatId"
              element={
                isAuthenticated ? <Chat /> : <Navigate to="/signin" replace />
              }
            />
            <Route
              path="/add-accommodation"
              element={
                isAuthenticated && userType === 'landlord' ? <AddAccommodation /> : <Navigate to="/signin" replace />
              }
            />
            <Route
              path="/student-profile"
              element={
                isAuthenticated && userType === 'student' ? <StudentProfile /> : <Navigate to="/signin" replace />
              }
            />
            <Route
              path="/landlord-profile"
              element={
                isAuthenticated && userType === 'landlord' ? <LandlordProfile /> : <Navigate to="/signin" replace />
              }
            />
            <Route
              path="/property/:id"
              element={
                isAuthenticated ? <PropertyDetails /> : <Navigate to="/signin" replace />
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App