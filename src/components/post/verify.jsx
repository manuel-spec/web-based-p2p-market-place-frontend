import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

export default function Verify() {
  const cookies = new Cookies();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(cookies.get("jwt"));
    const fetchData = async () => {
      await axios
        .get("http://localhost:8000/api/products/all", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("jwt"),
          },
        })
        .then((response) => {
          setProducts(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchData();
  }, []);

  const Verify_Product = (id) => {
    axios
      .put(
        `http://localhost:8000/api/products/${id}/status`,
        {status: "done"},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + cookies.get("jwt"),
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setProducts((prevProducts) =>
          prevProducts.map((product) => {
            if (product.id === id) {
              return { ...product, status: "done" };
            }
            return product;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }



  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Verify Products</h1>
      </div>
      <div className="bg-background rounded-lg shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-center">Verified</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <div className="flex items-center gap-4">
                    <img
                      src={`http://localhost:8000/api/images/${product.image}`}
                      alt={product.title}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">{product.title}</h3>
                      <p className="text-muted-foreground text-sm">{product.category}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                </TableCell>
                <TableCell>
                  <p className="font-medium">${parseFloat(product.price).toFixed(2)}</p>
                </TableCell>
                <TableCell className="text-center">
                  <Checkbox checked={product.status === "done"} />
                </TableCell>
                <TableCell className="text-center">
                  <Button onClick={()=>Verify_Product(product.id)}>{product.status == "done" ? "Verified" : "verify"}</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
