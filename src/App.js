import { useState, useEffect } from "react"
import { supabase } from "./supabaseClient"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ReactComponent as Logo } from "./img/plurality-logo.svg";

import Account from "./api/Account"
import HomeHeader from "./components/HomeHeader"
import Landing from "./views/Landing"
import Home from "./views/Home"
// TODO: implement these modules so we can render them:
import Explore from "./views/Explore"
import Profile from "./views/Profile"
import AboutUs from "./views/AboutUs"
import Share from "./views/Share"
// import Story from "./views/Story"

export default function App() {
  const [session, setSession] = useState(null);
  

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
          {/* <HomeHeader key={session.user.id} session={session} /> */}
          <Logo />
          <Router>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/profile">Profile</Link>
              <Link to="/share">Share your story</Link>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/profile" element={<Profile key={session.user.id} session={session}/>} /> 
              <Route path="/share" element={<Share />} />
            </Routes>
          </Router>
        </>
      }
    </div>
  )
}