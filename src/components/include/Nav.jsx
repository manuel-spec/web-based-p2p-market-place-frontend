import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <header className="h-20 flex items-center px-6">
        <Link className="flex items-center justify-center" to={"/"}>
          <MountainIcon className="h-6 w-6" />
          
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/products"}>
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
    </div>
  )
}

function MountainIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    )
  }

  
export default Nav