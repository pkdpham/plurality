import { useState, useEffect } from "react"
import { supabase } from "./supabaseClient"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./img/plurality-logo.svg";
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

import Landing from "./views/Landing"
import Home from "./views/Home"

// TODO: implement these modules so we can render them:
import Explore from "./views/Explore"
import Profile from "./views/Profile"
import AboutUs from "./views/AboutUs"
import Share from "./views/Share"

export default function App() {
  const [session, setSession] = useState(null);
  const options = {
    position: positions.MIDDLE
  };
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const toggleNav = () => {
  //   setToggleMenu(!toggleMenu)
  // }
 
  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {
        !session ? <Landing /> : 
        <>
          <Router>
            <Link to="/"><Logo/></Link>
            <nav>
              <li className="items plain"><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
              <li className="items plain"><Link to="/explore" style={{ textDecoration: 'none' }}>Explore</Link></li>
              <li className="items plain"><Link to="/about-us" style={{ textDecoration: 'none' }}>About Us</Link></li>
              <li className="items plain"><Link to="/profile" style={{ textDecoration: 'none' }}>Profile</Link></li>
              <li className="buttonNav items" ><Link to="/share" style={{ textDecoration: 'none' }}>Share your story</Link></li>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/profile" element={<Profile key={session.user.id} session={session}/>} /> 
              <Route 
                path="/share"
                // TODO: pretty sure this is causing issues: "findDOMNode is deprecated in StrictMode"
                element={
                  <Provider template={AlertMUITemplate} {...options}>
                      <Share />
                  </Provider>
                }
              />
            </Routes>
          </Router>
        </>
      }
    </div>
  )
}