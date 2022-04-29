import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { useParams } from 'react-router-dom'

export default function Story() {
    const { id } = useParams()

    // TODO: promise(?) and requests go here

    // TODO: fill this return with story name, content, and everything from the HTTP request
    return(
        <>
          <Typography variant="h5" component="div">
            Hey, this is story with ID {id}
          </Typography> 
        </>
    )
}