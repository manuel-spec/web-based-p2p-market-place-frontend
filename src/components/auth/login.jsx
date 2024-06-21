import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
import Cookie from "universal-cookie"
import { TailSpin } from 'react-loader-spinner'
import {
  Alert,
  AlertDescription,
} from "@/components/ui/alert"

export default function Login() {
  const navigate = useNavigate()
  const cookie = new Cookie()
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error , setError] = useState(null)
  const handleLogin = () => {
    if(email && password){
      setLoading(true)
      axios.post("http://localhost:8000/api/auth/login",{
        email: email,
        password: password
      }).then((res)=>{
        cookie.set("jwt", res.data.access_token, {path: "/"})
        cookie.set("name", res.data.user.name, {path: "/"})
        cookie.set("email", res.data.user.email, {path: "/"})
        setLoading(false)
        navigate("/products")
      }).catch((err)=>{
        setLoading(false)
        setError(err.response.data.message)
      })
    }
  }
  return (
    <div className="grid md:grid-cols-2 w-full min-h-screen ">
      <div className="flex items-center justify-center px-4 py-12 md:px-6">
        <Card className="w-full max-w-md space-y-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Login</CardTitle>
            <CardDescription>Enter your email and password to access your account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
          
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
            <Button type="submit" className="w-full" onClick={()=>handleLogin()}>
            {loading ? <TailSpin
              visible={true}
              height="30"
              width="80"
              color="#ffffff"
              ariaLabel="tail-spin-loading"
              radius="2"
              wrapperStyle={{}}
              wrapperClass=""
              /> : "Login"}
            </Button>
          </CardFooter>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link to="/auth/signup" className="text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
            {error && (
            <div className="">
              <Alert variant="destructive">
              
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
            </div>
            )}
          </div>
        </Card>
      </div>
      <div className="hidden md:block relative">
        <img
          src="https://cloudcommercepro.com/wp-content/uploads/2020/09/marketplace-hero.jpg"
          alt="Login Image"
      
          className=" h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
