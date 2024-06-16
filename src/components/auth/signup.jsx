import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div className="grid md:grid-cols-2 w-full min-h-screen">
      <div className="flex items-center justify-center px-4 py-12 md:px-6">
        <Card className="w-full max-w-md space-y-4">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
            <CardDescription>Enter your email and password to create a new account.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Fullname</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Signup
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
