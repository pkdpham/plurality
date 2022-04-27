import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { Grid, TextField } from '@mui/material';

// TODO: update API calls to new schema for user table
// from table auth/users: email, password
// from table public/profile: username, profile info, liked stories, posted stories

export default function Profile({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      console.log('reading here') // TODO: delete
      const user = supabase.auth.user()

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username`) // multi-select: {.select(`username, website`)}
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({ username }) {
    try {
      setLoading(true)
      const user = supabase.auth.user()

      const updates = {
        id: user.id,
        username,
        updated_at: new Date(),
      }

      let { error } = await supabase.from('profiles').upsert(updates, {
        returning: 'minimal', // Don't return the value after inserting
      })

      if (error) {
        throw error
      }
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-widget">
      <div className="profilePicContainer">
        <img src="miranda.jpeg" alt="profile placeholder" width="200px" height="200px" ></img>
        <p>MIRANDA TROGARD</p>
      </div>
      <div>
        <TextField id="email" label="Email" variant="standard" value={session.user.email} disabled/>
      </div>
      <div>
        <TextField id="username" label="Username" variant="standard" value={username || ''}
          onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <TextField id="location" label="Location" variant="standard" />
      </div>
      <div>
        <TextField id="politic" label="Political Standing" variant="standard" />
      </div>
      <div>
        <TextField id="race" label="Race/Ethnicity" variant="standard" />
      </div>
      <div>
        <button
          className="button block primary"
          onClick={() => updateProfile({ username })}
          disabled={loading}
        >
          {loading ? 'Saving ...' : 'Save'}
        </button>
      </div>

      <div>
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}