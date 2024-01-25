import React from 'react'


const Header = () => {
  return (
    <header className=" body-font">
  <div className="container flex  flex-row md:flex-row items-center">
    <a className="flex title-font font-medium  text-white mb-4 md:mb-0">
      {/* add image form  the  public folder  as logo  and set it higet small according to a nav bar but  wrap the image to a logo   */}
      <img src="/logo.png" alt="Logo" style={{ height: "100px"}} />

     

     
      
      <span className="ml-3 text-black text-xl"></span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-white">First Link</a>
      <a className="mr-5 hover:text-white">Second Link</a>
      <a className="mr-5 hover:text-white">Third Link</a>
      <a className="mr-5 hover:text-white">Fourth Link</a>
    </nav>
    
  </div>
</header>
  )
}

export default Header
