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
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  // Theme
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const NavItem = (
    <>
<<<<<<< HEAD
      <div className=" space-y-2 flex-row  justify-items-center  gap-8">
        <li>
          <NavLink>AddTourist</NavLink>
        </li>
        <li>
          <NavLink>AllTourist</NavLink>
        </li>
        <li>
          <NavLink>Home</NavLink>
        </li>
=======
      <div className=" flex justify-center  gap-8">
        <ul className=" space-y-3">
          <li>
            <NavLink>AddTourist</NavLink>
          </li>
          <li>
            <NavLink>AllTourist</NavLink>
          </li>
          <li>
            <NavLink>Home</NavLink>
          </li>
        </ul>
>>>>>>> e761cae5c26608bc060e27e48ac787d8b2a6ba33
      </div>
    </>
  );
  return (
<<<<<<< HEAD
  
    <div className="navbar shadow-md  bg-green-100">
=======
    // <div className="navbar bg-yellow-100 shadow-md w-full   ">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor">
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16" />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    //         {NavItem}
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1">
    //       {NavItem}
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Button</a>
    //   </div>
    //   <label className="flex cursor-pointer gap-2">
    //     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
    //     <input
    //       onChange={handleToggle}
    //       type="checkbox"
    //       className="toggle theme-controller" />
    //     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    //   </label>
    // </div>
    <div className="navbar bg-base-100">
>>>>>>> e761cae5c26608bc060e27e48ac787d8b2a6ba33
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
<<<<<<< HEAD
            className="menu menu-sm dropdown-content  bg-green-200 rounded-box z-[1] mt-3 w-100 p-2 shadow"
          >
            <div className="flex:sm flex-col">
              {NavItem}
              

            </div>
            <label className="flex pt-2 md:hidden cursor-pointer gap-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                onClick={handleToggle}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            
          </ul>
        </div>
        <a className="btn btn-ghost text-xl   ">Ahmad</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>{NavItem}</li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className=" hidden   sm:flex gap-2 p-2">
           <a
            href="#_"
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500   hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">SignUP</span>
          </a>
          <a
            href="#_"
            className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500   hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
          >
            <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span class="relative">Login</span>
          </a>
        </div>

        <label className="md:flex hidden cursor-pointer gap-2 px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            onClick={handleToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
=======
            className="lg:flex menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {NavItem}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
>>>>>>> e761cae5c26608bc060e27e48ac787d8b2a6ba33
      </div>
      <div className="navbar-center hidden lg:flex justify-center">
        <ul className="menu  flex justify-center   px-1">{NavItem}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn hidden">Button</a>
      </div>

      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>

        <input
          onChange={handleToggle}
          type="checkbox"
          className="toggle theme-controller"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
      </label>
    </div>
  );
};

export default Nav;
