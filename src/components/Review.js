import { Button, TextField } from '@mui/material'
import React from 'react'

function Review() {
  return (
    <div>
      <TextField size='small' label="Opinion" variant='outlined'/>
      <Button sx={{ml:"20px"}} variant="contained">Add</Button>
    </div>
  )
}

export default Review
