import { Link } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Discover the Power of Peer-to-Peer Marketplace
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    peerconnect Marketplace is a trusted platform that connects buyers and sellers directly, empowering you to
                    find unique products and services at competitive prices.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    to={"/products"}
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Explore Marketplace
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Become a Seller
                  </Link>
                </div>
              </div>
              <img
                src="https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Peer-to-Peer Transactions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  peerconnect Marketplace offers a secure and user-friendly platform for buyers and sellers to connect
                  directly, with features that ensure a seamless and trusted experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Verified Reviews</h3>
                      <p className="text-muted-foreground">
                        Browse through genuine user reviews to make informed decisions and build trust with your
                        sellers.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Diverse Offerings</h3>
                      <p className="text-muted-foreground">
                        Explore a wide range of products and services from local and global sellers, catering to your
                        unique needs.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the peerconnect Marketplace Team</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our mission is to create a trusted and accessible platform that empowers buyers and sellers to
                    connect directly, fostering a vibrant and thriving peer-to-peer marketplace.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="text-sm font-medium">Amanuel Asefa</p>
                      <p className="text-xs text-muted-foreground">founder</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user." />
                      <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="text-sm font-medium">Jane Ahn</p>
                      <p className="text-xs text-muted-foreground">Co-founder</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>TS</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="text-sm font-medium">Tom Smith</p>
                      <p className="text-xs text-muted-foreground">Head of Engineering</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <Avatar>
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>LW</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <p className="text-sm font-medium">Lisa Wang</p>
                      <p className="text-xs text-muted-foreground">Head of Product</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://www.peacemakersnetwork.org/wp-content/uploads/2019/09/placeholder.jpg"
                alt="Team"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 peerconnect Marketplace. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
        </nav>
      </footer>
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