import { useState, useEffect } from 'react'
import { supabase } from './supabaseClient'
import Landing from './views/Landing'
import Account from './api/Account'
import HomeHeader from './components/HomeHeader'

export default function Home() {
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
          <Account key={session.user.id} session={session} />
        </div>
      }
    </div>
  )
}