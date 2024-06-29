import { useState, useMemo, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"
import axios from "axios"
import Cookies from "universal-cookie"

export default function MyProducts() {
    const cookies = new Cookies()
  const [products, setProducts] = useState([])
  const [id, setId] = useState(cookies.get("id"))
  useEffect(() => {
    console.log(id)
    

    const fetchData = async () => {
      await axios
        .get(`http://localhost:8000/api/products/mine/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("jwt"),
          },
        })
        .then((response) => {
          console.log(response.data.message);
          setProducts(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);
  const [sort, setSort] = useState("featured")
  
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }
  const handleUpdate = (id, updates) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, ...updates }
        }
        return product
      }),
    )
  }
  return (
    <main className="flex-1 py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sort by{" "}
                {sort === "featured"
                  ? "Featured"
                  : sort === "low"
                  ? "Price: Low to High"
                  : sort === "high"
                  ? "Price: High to Low"
                  : "Newest"}
                <ChevronDownIcon className="ml-2 w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="low">Price: Low to High</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="high">Price: High to Low</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.length > 0 && products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href="#" prefetch={false}>
                <img
                  src={"http://127.0.0.1:8000/api/images/" + product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-bold">${product.price}</span>
                    <div className="flex gap-2">
                      
                     
                        <>
                          <Button
                            variant="outline"
                            onClick={() => handleUpdate(product.id, { title: "Updated Product" })}
                          >
                            Update
                          </Button>
                          <Button variant="danger" onClick={() => handleDelete(product.id)}>
                            Delete
                          </Button>
                        </>
                      
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

function ChevronDownIcon(props) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}