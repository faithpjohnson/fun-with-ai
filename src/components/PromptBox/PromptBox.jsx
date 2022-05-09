import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export default function Prompt () {
  return (
    <div className='prompt'>
      <TextField
        id='outlined-multiline-static'
        label='Enter Prompt'
        multiline
        rows={8}
        fullWidth
        // defaultValue='Enter prompt here'
      />
      <Button variant="contained">SUBMIT</Button>

    </div>
  )
}
