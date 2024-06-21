import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Cookie from "universal-cookie";
import { TailSpin } from 'react-loader-spinner';

export default function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const cookie = new Cookie();

  const handleSignup = ()=>{
    if(name.length > 0 && username.length > 0 && email.length > 0 && password.length > 0){
      setLoading(true);
      axios.post("http://localhost:8000/api/auth/register",{
      name: name,
      username: username,
      email: email,
      password: password
    }).then((res)=>{
      console.log(res.data);
      console.log( res.data.access_token)
      cookie.set("jwt", res.data.access_token, {path: "/"})
      setLoading(false);
      navigate("/products");
    }).catch((err)=>{
      setLoading(false);
      console.log(err);
    })
    }
  }

  return (
    <div className="grid md:grid-cols-2 w-full min-h-screen">
      <div className="flex items-center justify-center px-4 py-12 md:px-6">
        <form action="post">
        <Card className="w-full max-w-md space-y-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
            <CardDescription>Enter your email and password to create a new account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Fullname</Label>
              <Input id="name" type="text" placeholder="John Doe" required onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">username</Label>
              <Input id="username" type="text" placeholder="Jhon21" required onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" onClick={()=>{handleSignup()}}>
              {loading ? <TailSpin
              visible={true}
              height="30"
              width="80"
              color="#ffffff"
              ariaLabel="tail-spin-loading"
              radius="2"
              wrapperStyle={{}}
              wrapperClass=""
              /> : "Sign Up"}
            </Button>
          </CardFooter>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </Card>
        </form>
      </div>
      <div className="hidden md:block relative">
        <img
          src="https://cloudcommercepro.com/wp-content/uploads/2020/09/marketplace-hero.jpg"
          alt="Login Image"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
