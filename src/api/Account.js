// import { useState, useEffect } from 'react'
// import { supabase } from '../supabaseClient'

// // TODO: update API calls to new schema for user table
// // from auth/users: email, password
// // from public/profile: username, profile info, liked stories, posted stories

// export default function Account({ session }) {
//   const [loading, setLoading] = useState(true)
//   const [username, setUsername] = useState(null)

//   useEffect(() => {
//     getProfile()
//   }, [session])

//   async function getProfile() {
//     try {
//       setLoading(true)
//       const user = supabase.auth.user()

//       let { data, error, status } = await supabase
//         .from('profiles')
//         .select(`username`) // multi-select: {.select(`username, website`)}
//         .eq('id', user.id)
//         .single()

//       if (error && status !== 406) {
//         throw error
//       }

//       if (data) {
//         setUsername(data.username)
//       }
//     } catch (error) {
//       alert(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   async function updateProfile({ username }) {
//     try {
//       setLoading(true)
//       const user = supabase.auth.user()

//       const updates = {
//         id: user.id,
//         username,
//         updated_at: new Date(),
//       }

//       let { error } = await supabase.from('profiles').upsert(updates, {
//         returning: 'minimal', // Don't return the value after inserting
//       })

//       if (error) {
//         throw error
//       }
//     } catch (error) {
//       alert(error.message)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="form-widget">
//       <div>
//         <label htmlFor="email">Email</label>
//         <input id="email" type="text" value={session.user.email} disabled />
//       </div>
//       <div>
//         <label htmlFor="username">Username</label>
//         <input
//           id="username"
//           type="text"
//           value={username || ''}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>

//       <div>
//         <button
//           className="button block primary"
//           onClick={() => updateProfile({ username })}
//           disabled={loading}
//         >
//           {loading ? 'Saving ...' : 'Save'}
//         </button>
//       </div>

//       <div>
//         <button className="button block" onClick={() => supabase.auth.signOut()}>
//           Sign Out
//         </button>
//       </div>
//     </div>
//   )
// }