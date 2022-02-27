import MagicLinkSignIn from '../api/MagicLinkSignIn'
import Container from '@mui/material/Container';
import { ReactComponent as Logo } from "../img/plurality-logo.svg";
import { Auth, Typography, Button } from "@supabase/ui";
import { createClient } from "@supabase/supabase-js";

const { Text } = Typography

const supabase = createClient(
    'https://vafmnjighwbvvjdbnywv.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhZm1uamlnaHdidnZqZGJueXd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU5MzY4OTEsImV4cCI6MTk2MTUxMjg5MX0.1lOmylDu_ThGsyRbwxqo24Pz8zijFCLuX9tWanBTnAg'
    )

const AuthContainer = (props) => {
  const { user } = Auth.useUser()
  if (user)
    return (
      <>
        <Typography.Text>Signed in: {user.email}</Typography.Text>
        <Button block onClick={() => props.supabaseClient.auth.signOut()}>
          Sign out
        </Button>
      </>
    )
  return props.children
}

function AuthBasic() {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container supabaseClient={supabase}>
        <Auth supabaseClient={supabase} providers={['google']} /> {/* TODO: enable sign-in w/ Twitter, Facebook, Apple */}
      </Container>
    </Auth.UserContextProvider>
  )
}

export default function Landing() {

    return (
        <Container maxWidth="lg">
            <div>
                <Logo />
            </div>
            <div className='landing'>
                <h1 style={{color: '#010101'}}>Learn.</h1>
                <h1 style={{color: '#6592e8'}}>Communicate.</h1>
                <h1 style={{color: '#da4343'}}>Empathize.</h1>
                <p>Learn about the impact of American policies by reading and sharing individual stories.</p>
            </div>
            <div className='login'>
                <AuthBasic />
            </div>
        </Container> 
    )
}
