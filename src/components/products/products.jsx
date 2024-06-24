
import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,

} from "@/components/ui/dropdown-menu";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Pagination } from "@/components/ui/pagination";
import axios from "axios";
import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";

function FilterIcon(props) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props) {
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
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}



export default function Products() {
  // const navigate = useNavigate();
  const cookies = new Cookies();
  const [products, setProducts] = useState([{}])
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: { min: 0, max: 1000 },
  });

  useEffect(()=>{
    const fetchData = async () => {
      await axios.get('http://127.0.0.1:8000/api/products', {headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + cookies.get('jwt')
    }})
    .then((response)=>{
      console.log(response.data)
      setProducts(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    }
    
      fetchData()
    
  }, [])


  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        ? product.title.toLowerCase().includes(searchTerm.toLowerCase())
        : false;
      const matchesCategory =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.includes(product.category);
      const matchesPrice =
        product.price >= selectedFilters.price.min &&
        product.price <= selectedFilters.price.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedFilters]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (type, value) => {
    if (type === "category") {
      setSelectedFilters({
        ...selectedFilters,
        category: selectedFilters.category.includes(value)
          ? selectedFilters.category.filter((item) => item !== value)
          : [...selectedFilters.category, value],
      });
    } else if (type === "price") {
      setSelectedFilters({
        ...selectedFilters,
        price: value,
      });
    }
  };
//   const [drawer, setDrawer] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
        
      <header className="w-full py-24 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              PeerConnect: Your Trusted P2P Marketplace
            </h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At PeerConnect, we revolutionize the way you buy and sell by
              connecting you directly with peers in a secure and user-friendly
              environment. Our platform offers a seamless and trustworthy
              experience. Your next great find or sale is just a click away on
              PeerConnect!
            </p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto py-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4 text-center p-5">Products</h1>
            <div className="flex items-center justify-between">
              <div className="relative w-full max-w-md">
               
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      <FilterIcon className="mr-2" />
                      Filters
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 p-4">
                    <div className="grid gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Category</h4>
                        <div className="grid gap-2">
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedFilters.category.includes(
                                "Home & Garden"
                              )}
                              onCheckedChange={() =>
                                handleFilterChange("category", "Home & Garden")
                              }
                            />
                            Home & Garden
                          </Label>
                          <Label className="flex items-center gap-2">
                            <Checkbox
                              checked={selectedFilters.category.includes(
                                "Bags & Accessories"
                              )}
                              onCheckedChange={() =>
                                handleFilterChange(
                                  "category",
                                  "Bags & Accessories"
                                )
                              }
                            />
                            Bags & Accessories
                          </Label>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Price Range</h4>
                        <div className="flex items-center gap-2">
                          <input
                            type="number"
                            value={selectedFilters.price.min}
                            onChange={(e) =>
                              handleFilterChange("price", {
                                ...selectedFilters.price,
                                min: parseInt(e.target.value),
                              })
                            }
                            className="w-full rounded-md border border-muted px-3 py-2"
                            placeholder="Min"
                          />
                          <input
                            type="number"
                            value={selectedFilters.price.max}
                            onChange={(e) =>
                              handleFilterChange("price", {
                                ...selectedFilters.price,
                                max: parseInt(e.target.value),
                              })
                            }
                            className="w-full rounded-md border border-muted px-3 py-2"
                            placeholder="Max"
                          />
                        </div>
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button variant="outline">
                  <ListOrderedIcon className="mr-2" />
                  Sort
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                
                <img
                  src={"../../../../web-based-p2p-market-place-backend-api/storage/app/public/images/" + product.image}
                  
                  className="h-48 object-cover rounded-md mb-4"
                  
                />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    ${parseFloat(product.price).toFixed(2)}
                  </span>
                  
                  <Drawer className="p-20">
                    <DrawerTrigger asChild>
                        
                        <Button >More ..</Button>
                        
                    </DrawerTrigger>
                    <DrawerContent>
                        <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                            <DrawerTitle>Info About the Product</DrawerTitle>
                            <DrawerDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae necessitatibus distinctio magnam sint ipsam incidunt corrupti quos, odio id error fugit itaque delectus unde perferendis dignissimos similique quia quo!</DrawerDescription>
                            <DrawerDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae necessitatibus distinctio magnam sint ipsam incidunt corrupti quos, odio id error fugit itaque delectus unde perferendis dignissimos similique quia quo!</DrawerDescription>
                            <DrawerDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae necessitatibus distinctio magnam sint ipsam incidunt corrupti quos, odio id error fugit itaque delectus unde perferendis dignissimos similique quia quo!</DrawerDescription>
                            
                        </DrawerHeader>
                    
                        <DrawerFooter>
                          
                            <DrawerClose asChild>
                            <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        </DrawerFooter>
                        </div>
                    </DrawerContent>
                    </Drawer>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
