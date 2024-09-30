
// import { Link, Outlet } from 'react-router-dom';
// import React from 'react';

// function Layout() {
//     function showCategories() {
//         const typeOfBooks = document.querySelector('.typeOfBooks');
//         typeOfBooks.style.opacity = 1;
//     }

//     function hideCategories() {
//         const typeOfBooks = document.querySelector('.typeOfBooks');
//         typeOfBooks.style.opacity = 0;
//     }

//     return(
//         <>
//           <div onMouseLeave={hideCategories} onMouseEnter={showCategories} className="typeOfBooks">
//               <Link to="/adventure">Adventure</Link>
//                     <Link  to="/Classics" >Classics</Link>
//                     <Link  to="/Detective" >Detective</Link>
//                     <Link  to="/Philosophy" >Philosophy</Link>
//                     <Link  to="/Poems" >Poems</Link>
//                     <Link  to="/Psychology" >Psychology</Link>
//                     <Link  to="/Romance" >Romance</Link>
//                     <Link  to="/ScienceFiction" >Science Fiction</Link>
//                     <Link  to="/Thriller" >Thriller, Mystery</Link>

//             </div>
//             <Outlet/>
//         </>
//     )
// }

// export default Layout();