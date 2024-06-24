import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { useEffect,useState } from 'react';

import { User } from 'lucide-react';

const Nav = () => {
    const cookies = new Cookies();
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        setName(cookies.get("name"))
        setEmail(cookies.get("email"))
        setUsername(cookies.get("username"))
    },[])


  return (
    <div>
        <header className="h-20 flex items-center px-6">
        <Link className="flex items-center justify-center" to={"/"}>
          <MountainIcon className="h-6 w-6" />
          
        </Link>
        <nav className="ml-auto flex gap-4 items-center">

          <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/products"}>
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/add-product"}>
            Post
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/about"}>
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/contact"}>
            Contact
          </Link>
          
          {name && email && (
            <Link to={"/me"}>
                 <div className='border rounded-xl p-2 flex'>
                <User size={22} />
                {name}
            </div>
            </Link>
          )}
          {!name && !email && (
            <div className='ml-auto flex gap-4 items-center'>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/auth/signup"}>
              Register
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/auth/login"}>
              Login
              </Link>
            </div>

          )}
          {username == "admin" && (
            <div className='ml-auto flex gap-4 items-center'>
            <Link className="text-sm font-medium hover:underline underline-offset-4" to={"/admin/verify"}>
              verify
            </Link>
          
            </div>
          )}

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