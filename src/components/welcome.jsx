const Welcome = () => {
  return (
    <div>
      <nav className="flex justify-between px-10">
        <div>
            <h1 className="text-4xl">App</h1>
        </div>
        <div>
          <ul  className="inline-flex">
            <li className="p-3">
              <a href="/login">Home</a>
            </li>
            <li className="p-3">
              <a href="/signup">Context</a>
            </li>
            <li className="p-3">
              <a href="/signup">Products</a>
            </li>
            <li className="p-3">
              <a href="/signup">Signup</a>
            </li>
            <li className="p-3">
              <a href="/signup">Login</a>
            </li>
          </ul>
        </div>
    </nav>
    <div className="grid items-center justify-center p-10 mt-10">
      <h1 className="text-4xl text-center p-5">Welcome to our App</h1>
      <p className="m-auto">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, minus omnis fuga voluptas rerum
        , qui, tempore veniam nisi est sit nihil quibusdam nostrum eveniet natus aliquid. Aperiam, illum. Accusam
        us, pariatur? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, minus omnis fuga voluptas r
        erum, qui, tempore veniam nisi est sit nihil quibusdam nostrum eveniet natus aliquid. Aperiam, illum. Accusamus, pariatur?</p>

    </div>
    </div>
  )
}

export default Welcome