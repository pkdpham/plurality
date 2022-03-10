import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ReactComponent as Logo } from "../img/plurality-logo.svg";
import {NavLink} from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../views/Home"
// TODO: implement these modules so we can render them:
import Explore from "../views/Explore"
import Profile from "../views/Profile"
import AboutUs from "../views/AboutUs"


// const ResponsiveAppBar = () => {
//   const pages = [{
//     pageName: "Home",
//     route: "/Home"
//   },
//   {
//     pageName: "Explore",
//     route: "/Explore"
//   },
//   {
//     pageName: "About Us",
//     route: "/AboutUs"
//   },
//   {
//     pageName: "Profile",
//     route: "/Profile"
//   },
//   {
//     pageName: "Share your story",
//     route: "/Story"
//   }];

//   const [anchorElNav, setAnchorElNav] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   return (
//     <AppBar position="sticky">
//       <Container maxWidth="lg">
//         <Toolbar disableGutters>
//           <div
//             nowrap="true"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//           >
//             <Logo />
//           </div>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page["pageName"]} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">
//                     {/* <NavLink to={page.route}></NavLink> TODO: react gets mad at this*/}
//                   </Typography>
//                 </MenuItem>
//               ))};
//             </Menu>
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page["pageName"]}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page["pageName"]}
//               </Button>
//             ))}
//           </Box>

//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

// export default function AppBar(props) {
//   return(
//     <>
//       <Router>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/explore">Explore</Link>
//           <Link to="/about-us">About Us</Link>
//           <Link to="/profile">Profile</Link>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/explore" element={<Explore />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/profile" element={<Profile session={props.session} />} /> 

//           {/*
//           TODO: implement storying writing/sharing function
//           <Route path="/share" element={<Share />} />
//           */} 
//         </Routes>
//       </Router>
//     </>
//   )
// }