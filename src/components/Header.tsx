import React from 'react'
import { Link } from 'react-router-dom'
import { Home, LogOut, User, Menu } from 'lucide-react'

interface HeaderProps {
  isAuthenticated: boolean
  setIsAuthenticated: (value: boolean) => void
  userType: 'student' | 'landlord' | null
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, setIsAuthenticated, userType }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const handleSignOut = () => {
    setIsAuthenticated(false)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Home size={24} />
          <span className="text-xl font-bold hidden sm:inline">Student Accommodation Finder</span>
          <span className="text-xl font-bold sm:hidden">SAF</span>
        </Link>
        {isAuthenticated && (
          <div className="hidden sm:flex items-center space-x-4">
            {userType === 'landlord' && (
              <Link to="/add-accommodation" className="hover:text-blue-200">
                Add Accommodation
              </Link>
            )}
            <Link to={userType === 'student' ? '/student-profile' : '/landlord-profile'} className="hover:text-blue-200">
              <User size={20} />
            </Link>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
            >
              <LogOut size={18} />
              <span>Sign Out</span>
            </button>
          </div>
        )}
        {isAuthenticated && (
          <div className="sm:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              <Menu size={24} />
            </button>
          </div>
        )}
      </div>
      {isAuthenticated && isMenuOpen && (
        <div className="sm:hidden mt-4 space-y-2">
          {userType === 'landlord' && (
            <Link to="/add-accommodation" className="block py-2 px-4 hover:bg-blue-700">
              Add Accommodation
            </Link>
          )}
          <Link to={userType === 'student' ? '/student-profile' : '/landlord-profile'} className="block py-2 px-4 hover:bg-blue-700">
            Profile
          </Link>
          <button
            onClick={handleSignOut}
            className="w-full text-left py-2 px-4 hover:bg-blue-700"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  )
}

export default Header