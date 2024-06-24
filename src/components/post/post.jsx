import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import axios from 'axios'
import Cookies from "universal-cookie"
import { useNavigate } from "react-router-dom"

export default function Post() {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('electronics')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [images, setImages] = useState([])
  const cookies = new Cookies()
  const navigate = useNavigate()
 
  
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to array
    setImages(files);
  };

  const handleSubmit = async () => {
    // Check if images array is empty
    if (images.length === 0) {
      console.error('Please select at least one image');
      // Handle this case based on your application's requirements
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('category', category);
      formData.append('description', description);
      formData.append('price', price);
  
      // Append images to FormData
      for (let i = 0; i < images.length; i++) {
        formData.append('image', images[i]); // Use 'image' as the key for each image
      }
  
      // Make Axios post request
      const response = await axios.post('http://127.0.0.1:8000/api/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': 'Bearer ' + cookies.get('jwt')
        }
      });
  
      console.log('Post successful!', response.data);
      navigate('/products')
      // Optionally, you can redirect or show a success message here
    } catch (error) {
      console.error('Error posting item:', error);
      // Handle error, show error message to user
    }
  };
  




  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Post Your Item</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="title">Item Title</Label>
              <Input id="title" placeholder="Enter item title" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="category">Category</Label>
              <Select id="category"  onChange={(e) => setCategory(e.target.value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics" onClick={()=>setCategory("electronics")}>Electronics</SelectItem>
                  <SelectItem value="clothing" onClick={()=>setCategory("Clothing")}>Clothing</SelectItem>
                  <SelectItem value="furniture" onClick={()=>setCategory("furniture")}>Furniture</SelectItem>
                  <SelectItem value="toys" onClick={()=>setCategory("toys")}>Toys</SelectItem>
                  <SelectItem value="books" onClick={()=>setCategory("books")}>Books</SelectItem>
                  <SelectItem value="other" onClick={()=>setCategory("other")}>Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="description">Item Description</Label>
            <Textarea id="description" placeholder="Describe your item" rows={4} onChange={(e)=>setDescription(e.target.value)}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="text" placeholder="Enter price" onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div>
              <Label htmlFor="images">Upload Images</Label>
              <Input id="images" type="file" multiple onChange={handleImagesChange} />

            </div>
          </div>
          <div className="p-5">
            
          </div>
          <Button type="submit" className="w-full" onClick={()=>handleSubmit()}>
            Post Item
          </Button>
        </form>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* <img src={images} alt="Item Image" width={300} height={300} className="rounded-lg object-cover" /> */}
            {images.length > 0 && (
  // Display the preview only if there are images selected
                <img
                  src={URL.createObjectURL(images[0])} // Use the first image
                  alt="Item Image"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                />
              )}
            <div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-muted-foreground mb-2">{category}</p>
              <p className="text-lg font-semibold">{price}</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            {description}
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <UserIcon className="w-5 h-5" />
            <span>{cookies.get("name")}</span>
            <MailIcon className="w-5 h-5" />
            <span>{cookies.get("email")}</span>
            
          </div>
        </div>
      </div>
    </div>
  )
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}





function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}