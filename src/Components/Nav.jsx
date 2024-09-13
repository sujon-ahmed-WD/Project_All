// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// const Nav = () => {

//   const [theme,setTheme]=useState(localStorage.getItem("theme")? localStorage.getItem("theme"):"light");
//   // Theme
//   const handleToggle =(e)=>{
//     if(e.target.checked)
//     {
//       setTheme("dark")
//     }
//     else
//     {
//       setTheme("light");
//     }
//   }


//   useEffect(()=>{
//     localStorage.setItem("theme",theme);
//     const localTheme=localStorage.getItem("theme");
//     document.querySelector("html").setAttribute("data-theme",localTheme)
//   },[theme]);


//   const NavItem = (
//     <>
//       <div className="flex justify-center  gap-8">
//         <li>
//           <NavLink>AddTourist</NavLink>
//         </li>
//         <li>
//           <NavLink>AllTourist</NavLink>
//         </li>
//         <li>
//           <NavLink>Home</NavLink>
//         </li>
//       </div>
//     </>
//   );
//   return (
//     <div className=" ">
//       <div className=" w-full  navbar bg-yellow-200 px-4 shadow-lg z-10 ">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
//             >
//               {/* Links */}
//               {NavItem}
//             </ul>
//           </div>
//           <a className="btn btn-ghost text-xl">daisyUI</a>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{NavItem}</ul>
//         </div>
//         <div className="navbar-end">
//           <a className="btn">Button</a>
//         </div>

//         {/* Toggle bar */}
//         <div>
//           <label className="flex cursor-pointer gap-2 px-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <circle cx="12" cy="12" r="5" />
//               <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
//             </svg>
//             <input
//             onClick={handleToggle}
             
//               type="checkbox"
//               value="synthwave"
//               className="toggle theme-controller"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
//             </svg>
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;

// export default Navbar;
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  // Theme
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark")
    }
    else {
      setTheme("light");
    }
  }


  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme)
  }, [theme]);


  const NavItem = (
    <>
      <div className="flex justify-center  gap-8">
        <li>
          <NavLink>AddTourist</NavLink>
        </li>
        <li>
          <NavLink>AllTourist</NavLink>
        </li>
        <li>
          <NavLink>Home</NavLink>
        </li>
      </div>
    </>
  );
  return (
    <div className="navbar bg-yellow-100 shadow-md w-full   ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {NavItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {NavItem}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
      <label className="flex cursor-pointer gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
        <input
          onChange={handleToggle}
          type="checkbox"
          className="toggle theme-controller" />
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </label>
    </div>
  );
};

export default Nav;


