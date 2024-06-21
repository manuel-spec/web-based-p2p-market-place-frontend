import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Post() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Post Your Item</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="title">Item Title</Label>
              <Input id="title" placeholder="Enter item title" />
            </div>
            <div className="col-span-2 md:col-span-1">
              <Label htmlFor="category">Category</Label>
              <Select id="category" defaultValue="electronics">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="toys">Toys</SelectItem>
                  <SelectItem value="books">Books</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <Label htmlFor="description">Item Description</Label>
            <Textarea id="description" placeholder="Describe your item" rows={4} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" type="number" placeholder="Enter price" />
            </div>
            <div>
              <Label htmlFor="images">Upload Images</Label>
              <Input id="images" type="file" multiple />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div>
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <Label htmlFor="phone">Your Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" />
          </div>
          <Button type="submit" className="w-full">
            Post Item
          </Button>
        </form>
        <div className="bg-background rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Preview</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <img src="https://images.herzindagi.info/image/2023/Oct/best-laptops-2.jpg" alt="Item Image" width={300} height={300} className="rounded-lg object-cover" />
            <div>
              <h3 className="text-xl font-bold">Vintage Camera</h3>
              <p className="text-muted-foreground mb-2">Electronics</p>
              <p className="text-lg font-semibold">$99.99</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            This vintage camera is in excellent condition and perfect for photography enthusiasts.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <UserIcon className="w-5 h-5" />
            <span>John Doe</span>
            <MailIcon className="w-5 h-5" />
            <span>john@example.com</span>
            <PhoneIcon className="w-5 h-5" />
            <span>555-1234</span>
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


function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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