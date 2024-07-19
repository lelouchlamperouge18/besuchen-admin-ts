'use client'

// MUI Imports
import type { ChangeEvent } from 'react'
import { useState } from 'react'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import InputAdornment from '@mui/material/InputAdornment'

// Component Imports
import { Typography } from '@mui/material'

import Form from '@components/Form'

const FormCreateACity = () => {
  const [imgSrc, setImgSrc] = useState<string>('/images/cities/oslo.jpg')
  const [fileInput, setFileInput] = useState<string>('')

  const handleFileInputChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement

    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setFileInput(reader.result as string)
      }
    }
  }

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('/images/cities/oslo.jpg')
  }

  return (
    <Card>
      <CardHeader title='Create A City' />
      <CardContent>
        <Form>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='City Name'
                placeholder='Oslo'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-home-heart-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                rows={4}
                multiline
                label='Description'
                placeholder='Oslo is the capital and most populous city of Norway...'
                sx={{ '& .MuiOutlinedInput-root': { alignItems: 'baseline' } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <i className='ri-message-2-line' />
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <div className='flex max-sm:flex-col items-center gap-6'>
                <img height={100} width={100} className='rounded' src={imgSrc} alt='Profile' />
                <div className='flex flex-grow flex-col gap-4'>
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Button component='label' size='small' variant='contained' htmlFor='account-settings-upload-image'>
                      Upload The Introduction Image
                      <input
                        hidden
                        type='file'
                        value={fileInput}
                        accept='image/png, image/jpeg'
                        onChange={handleFileInputChange}
                        id='account-settings-upload-image'
                      />
                    </Button>
                    <Button size='small' variant='outlined' color='error' onClick={handleFileInputReset}>
                      Reset
                    </Button>
                  </div>
                  <Typography>Allowed JPG, GIF or PNG. Max size of 2 MB</Typography>
                </div>
              </div>
            </Grid>
            <Grid item xs={12}>
              Dynamic add <b>Slide[]+ Topic[] + text[]</b> here
            </Grid>
            <Grid item xs={12}>
              <Button variant='contained' type='submit'>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormCreateACity
