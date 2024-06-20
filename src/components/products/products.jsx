import { Link } from "react-router-dom"

export default function Products() {
  return (
    <div className="flex flex-col min-h-screen">
      
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
      </main>
    </div>
  )
}
