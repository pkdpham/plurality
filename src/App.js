import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Landing from './views/Landing'
import Profile from './views/Profile'
import Home from './views/Home'
import Explore from './views/Explore'
import Story from './views/Story'
import AboutUs from './views/AboutUs'
import HomeHeader from './components/HomeHeader'
import {Route, Routes, Navigate} from 'react-router-dom';

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    setSession(supabase.auth.session())

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      {
        !session ? <Landing /> : 
        <div>
          <HomeHeader />
            <Routes>
              <Route exact path='/' render={(routerProps) => (
                <Home/>
              )}/>
              <Route path='/Explore' render={(routerProps) => (
                <Explore/>
              )}/>
              <Route path='/AboutUs' render={(routerProps) => (
                <AboutUs/>
              )}/>
              <Route path='/Profile' render={(routerProps) => (
                <Profile key={session.user.id} session={session}/>
              )}/>
              <Route path='/Story' render={(routerProps) => (
                <Story/>
              )}/>
              <Navigate push exact to='/' />
            </Routes>
        </div>
      }
    </div>
  )
}