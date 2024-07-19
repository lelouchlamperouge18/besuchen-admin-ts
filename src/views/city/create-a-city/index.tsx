// MUI Imports
import Grid from '@mui/material/Grid'

// Component Imports
import FormCreateACity from '../FormCreateACity'

const CreateACity = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={12}>
        <FormCreateACity />
      </Grid>
    </Grid>
  )
}

export default CreateACity
