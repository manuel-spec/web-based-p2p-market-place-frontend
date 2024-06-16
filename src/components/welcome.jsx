import { Link } from "react-router-dom"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Welcome() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-20 flex items-center px-6">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          
        </Link>
        <nav className="ml-auto flex gap-4">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Products
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">PeerConnect: Your Trusted P2P Marketplace</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              At PeerConnect, we revolutionize the way you buy and sell by connecting you directly with peers in a secure and user-friendly environment. 
              our platform offers a seamless and trustworthy experience. Your next great find or sale is just a click away on PeerConnect!
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <RocketIcon className="h-12 w-12" />
                <h2 className="text-2xl font-bold">Fast Delivery</h2>
                <p className="text-gray-500 dark:text-gray-400">We ensure quick delivery of our products.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShieldIcon className="h-12 w-12" />
                <h2 className="text-2xl font-bold">Secure Payment</h2>
                <p className="text-gray-500 dark:text-gray-400">We provide secure payment options for our customers.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <PowerIcon className="h-12 w-12" />
                <h2 className="text-2xl font-bold">24/7 Support</h2>
                <p className="text-gray-500 dark:text-gray-400">We provide 24/7 support to all our customers.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">Testimonials</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 mt-8">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center">
                  <Avatar>
                    <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    PeerConnect Inc provides the best service in the market. I am very satisfied with their service.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center">
                  <Avatar>
                    <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Jane Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    I love the products from PeerConnect Inc. They are of high quality and affordable.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 text-center">
                  <Avatar>
                    <AvatarImage alt="User" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JP</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">Jim Doe</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The customer service from PeerConnect Inc is top-notch. They are always available to help.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to get started?</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us today and experience the best service.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link to={"/auth/signup"}><Button className="w-full">Sign Up</Button></Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function PowerIcon(props) {
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
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}

function RocketIcon(props) {
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
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}

function ShieldIcon(props) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}
