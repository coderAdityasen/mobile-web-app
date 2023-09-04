import { useState } from "react";

function Navbar(){
    const [isHidden, setIsHidden] = useState(true);

    const toggleHidden = () => {
      setIsHidden(!isHidden);
    };
   
    return(
        <>
        <nav className="flex justify-between items-center h-28">
            <div>
            <img src="https://movedevelopers.com/logo-min%203.png" alt="" />

{/* here are the lag devices icons */}
            </div>
            <div className="hidden sm:block">
                <ul className="flex gap-24 mr-10">
                    <li className="text-white font-semibold cursor-pointer">Developer Hub</li>
                    <li className="text-white font-semibold cursor-pointer">Learn</li>
                    <li className="text-white font-semibold cursor-pointer">DashBoard</li>
                    <li className="text-white font-semibold cursor-pointer">Social</li>
                </ul>
            </div>

{/* here are the hamburger */}

            <button onClick={toggleHidden} className="text-4xl cursor-pointer lg:hidden">
            <svg className="px-7 fill-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
  {/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
  <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
</svg>

            </button>
        </nav>
        {isHidden ? null : <div className="">
            <ul className="">
                <li className="text-center text-2xl my-10 font-semibold cursor-pointer text-white">Developer Hub</li>
                <li className="text-center text-2xl my-10 font-semibold cursor-pointer text-white">Learn</li>
                <li className="text-center text-2xl my-10 font-semibold cursor-pointer text-white">Dashboard</li>
                <li className="text-center text-2xl my-10 font-semibold cursor-pointer text-white">Socials</li>
            </ul>
        </div>  }
        <hr />
        
        </>
    )
}

export default Navbar;