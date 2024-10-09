import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface SignUpProps {
  setIsAuthenticated: (value: boolean) => void
  setUserType: (type: 'student' | 'landlord') => void
}

const SignUp: React.FC<SignUpProps> = ({ setIsAuthenticated, setUserType }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [userTypeState, setUserTypeState] = useState<'student' | 'landlord'>('student')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert("Passwords don't match")
      return
    }
    // TODO: Implement actual user registration
    setIsAuthenticated(true)
    setUserType(userTypeState)
    navigate('/')
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">User Type</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="student"
                checked={userTypeState === 'student'}
                onChange={() => setUserTypeState('student')}
                className="mr-2"
              />
              Student
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="landlord"
                checked={userTypeState === 'landlord'}
                onChange={() => setUserTypeState('landlord')}
                className="mr-2"
              />
              Landlord
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp