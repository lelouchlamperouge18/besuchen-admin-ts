// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import CardCityWithImg from '@/views/city/Card'

const listCities = ['Oslo', 'Bergen', 'Tromsø', 'The Stavanger region', 'Trondheim', 'Kristiansand']

const Cities = () => {
  return (
    <div className='Cities'>
      <Grid container spacing={6}>
        {listCities.map((city: string, key: number) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <CardCityWithImg name={city} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Cities
