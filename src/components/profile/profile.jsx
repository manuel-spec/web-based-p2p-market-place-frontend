import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState,useEffect } from "react";
import  Cookie  from 'universal-cookie';
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [username, setUsername] = useState(null)
    const navigate = useNavigate();
    const cookies = new Cookie()
      useEffect(() => {
        setName(cookies.get("name"))
        setEmail(cookies.get("email"))
        setUsername(cookies.get("username"))
        console.log(cookies.get("jwt"))
      },[])
    
      const LogOut = ()=>{
        cookies.remove("jwt")
        cookies.remove("name")
        cookies.remove("email")
        cookies.remove("username")
        navigate("/auth/login")
      }
  return (
    <div className="container mx-auto max-w-md px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <div className="flex items-center justify-center mb-6">
          <Avatar className="h-24 w-24">
            <img  src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="" width={400}/>
            <AvatarFallback>{name && name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="mt-2 text-gray-500">Update Your Profile</p>
        </div>
        <form className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" onChange={(e)=>setUsername(e.target.value)} value={username}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="profile-picture">Profile Picture</Label>
              <div className="flex items-center gap-2">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>{name && name[0]}</AvatarFallback>
                </Avatar>
                <Input id="profile-picture" type="file" />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Update Profile
          </Button>
          <Button type="submit" className="w-full bg-red-600" onClick={()=>LogOut()}>
            Logout
          </Button>
        </form>
      </div>
    </div>
  );
}
