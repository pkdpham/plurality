import { useState, useEffect } from 'react'
import { supabase } from '../supabaseClient'
import { Grid, TextField, Switch } from '@mui/material'


// TODO: update API calls to new schema for user table
// from table auth/users: email, password
// from table public/profile: username, profile info, liked stories, posted stories

export default function Profile({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState(null)
  const [emailChecked, setEmailChecked] = useState(false)
  const [userChecked, setUserChecked] = useState(false)
  const [locationChecked, setLocationChecked] = useState(false)
  const [poliChecked, setPoliChecked] = useState(false)
  const [raceChecked, setRaceChecked] = useState(false)

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

  const switchEmailHandler = (event) => {
    setEmailChecked(event.target.checked);
  };
  const switchUserHandler = (event) => {
    setUserChecked(event.target.checked);
  };
  const switchLocationHandler = (event) => {
    setLocationChecked(event.target.checked);
  };
  const switchPoliHandler = (event) => {
    setPoliChecked(event.target.checked);
  };
  const switchRaceHandler = (event) => {
    setRaceChecked(event.target.checked);
  };

  return (
    <Grid container direction="row" className="form-widget">
      <Grid container direction="column" className="box">
        <div className="profilePicContainer">
          <img src={process.env.PUBLIC_URL + "/miranda.jpeg"} alt="profile placeholder" width="200px" height="200px" ></img>
          <p>MIRANDA TROGARD</p>
        </div>
        <div>
          <TextField id="email" label="Email" variant="standard" value={session.user.email} disabled/>
          <Switch checked={emailChecked} onChange={switchEmailHandler}/>
        </div>
        <div>
          <TextField id="username" label="Username" variant="standard" value={username || ''}
            onChange={(e) => setUsername(e.target.value)}/>
          <Switch checked={userChecked} onChange={switchUserHandler}/>
        </div>
        <div>
          <TextField id="location" label="Location" variant="standard" />
          <Switch checked={locationChecked} onChange={switchLocationHandler}/>
        </div>
        <div>
          <TextField id="politic" label="Political Standing" variant="standard" />
          <Switch checked={poliChecked} onChange={switchPoliHandler}/>
        </div>
        <div>
          <TextField id="race" label="Race/Ethnicity" variant="standard" />
          <Switch checked={raceChecked} onChange={switchRaceHandler}/>
        </div>
        <div>
          <br></br>
          <button
            className="button block primary"
            onClick={() => updateProfile({ username })}
            disabled={loading}
          >
            {loading ? 'Saving ...' : 'Save'}
          </button>
          <br></br>
          <br></br>
        </div>
        <div>
          <button className="button block" onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        </div>
      </Grid>
      <Grid container direction="column" className="box">
        <div>
          Storyteller
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
      </Grid>
    </Grid>
  )
}