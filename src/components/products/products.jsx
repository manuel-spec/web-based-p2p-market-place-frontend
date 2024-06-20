"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Pagination } from "@/components/ui/pagination";

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

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    price: { min: 0, max: 1000 },
  });

  const products = [
    {
      id: 1,
      image: "https://t3.ftcdn.net/jpg/01/56/55/24/360_F_156552441_xlhQ0Nr4kV1xrxzngI6IjpJ7aeZJQMfD.jpg",
      title: "Handmade Ceramic Vase",
      description:
        "A unique and beautiful ceramic vase, perfect for any home.",
      price: 45.99,
      category: "Home & Garden",
    },
    {
      id: 2,
      image: "https://img.freepik.com/free-vector/modern-desktop-compute-concept-illustration_114360-12156.jpg",
      title: "Vintage Leather Satchel",
      description:
        "A timeless and durable leather satchel, great for everyday use.",
      price: 89.99,
      category: "Bags & Accessories",
    },
    {
      id: 3,
      image: "https://cdn.thewirecutter.com/wp-content/media/2022/08/macbook-2048px-9765.jpg",
      title: "Artisanal Wooden Cutting Board",
      description:
        "A high-quality cutting board made from sustainable wood.",
      price: 29.99,
      category: "Home & Garden",
    },
    {
      id: 4,
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/MacBook-Pro-13inch.jpg/800px-MacBook-Pro-13inch.jpg",
      title: "Handcrafted Wool Scarf",
      description: "A warm and cozy scarf, perfect for the colder months.",
      price: 35.99,
      category: "Bags & Accessories",
    },
    {
      id: 5,
      image: "https://i.ebayimg.com/images/g/KwQAAOSwXUlkA2t5/s-l400.jpg",
      title: "Artisanal Ceramic Mug",
      description:
        "A beautifully crafted ceramic mug, perfect for your morning coffee.",
      price: 18.99,
      category: "Home & Garden",
    },
    {
      id: 6,
      image: "https://images-cdn.ubuy.co.in/633a9f5e4c1b7c2430346cdd-xxbao-mini-dirt-bike-49cc-dirt-bike.jpg",
      title: "Vintage Leather Wallet",
      description:
        "A durable and stylish leather wallet, perfect for everyday use.",
      price: 29.99,
      category: "Bags & Accessories",
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
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
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-cover rounded-md mb-4"
                  
                />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button>Add to Cart</Button>
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
