import { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,

} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {AArrowDown} from 'lucide-react'

import axios from "axios";
import Cookies from "universal-cookie";
// import { useNavigate } from "react-router-dom";

import { Filter, Package } from "lucide-react";

export default function Products() {
  // const navigate = useNavigate();
  const cookies = new Cookies();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://127.0.0.1:8000/api/products", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("jwt"),
          },
        })
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else {
        return b.title.localeCompare(a.title);
      }
    });

    return sortedProducts;
  }, [products, searchQuery, sortOrder]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === "asc" ? "desc" : "asc"));
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
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 rounded-md border border-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
              </div>
              <div className="flex items-center gap-4">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                    <Filter />
                      Filters
                    </Button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
                <Button variant="outline" onClick={toggleSortOrder}>

                  <AArrowDown />
                  Sort
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-6 p-10">
            {filteredAndSortedProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col">
                <img
                  src={"http://127.0.0.1:8000/api/images/" + product.image}
                  className="h-48 object-cover rounded-md mb-4"
                  alt={product.title}
                />
                <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold">
                    ${parseFloat(product.price).toFixed(2)}
                  </span>
                  <Drawer className="p-20">
                    <DrawerTrigger asChild>
                      <Button>More ..</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <div className="mx-auto w-full max-w-sm">
                        <DrawerHeader>
                          <img
                            src={"http://127.0.0.1:8000/api/images/" + product.image}
                            className="h-48 object-cover rounded-md mb-4"
                            alt={product.title}
                          />
                          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                          <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>
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
          <div className="mt-8"></div>
          {filteredAndSortedProducts && filteredAndSortedProducts.length === 0 && (
              <div>
                 <div className="flex flex-col items-center justify-center min-h-screen bg-background">
                  <div className="max-w-md px-6 py-12 bg-card rounded-lg shadow-lg">
                    <div className="flex flex-col items-center justify-center gap-4">
                      <Package className="h-12 w-12 text-primary" />
                      <h2 className="text-2xl font-bold text-card-foreground">No Verified Products</h2>
                      <p className="text-muted-foreground">
                        We&apos;re sorry, but there are no verified products available on our P2P marketplace at the moment. Please check
                        back soon as we continue to expand our offerings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
        </section>
      </main>
    </div>
  );
}
