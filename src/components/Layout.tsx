import { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
interface props {
  children: ReactNode
}
const Layout: FC<props> = ({ children }) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 font-mono">
      <header>
        <nav className="bg-gray-800 w-screen"></nav>
      </header>
    </div>
  )
}

export default Layout
