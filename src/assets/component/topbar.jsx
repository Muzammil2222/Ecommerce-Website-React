import { useState } from 'react'

function Topbar() {
    const [count, setCount] = useState(0)
  
    return (
      <>
       <div className="topbar bg-black py-4">
        <p className="text-white text-center">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="text-decoration-underline mx-2 font-bold font-poppins"><a href='#' class='underline decoration-slate-200	'>Shop Now</a></span></p>
       </div>
      </>
    )
  }
  export default Topbar