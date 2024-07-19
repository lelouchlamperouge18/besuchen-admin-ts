// MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

import CustomIconButton from '@/@core/components/mui/IconButton'

interface CardCityWithImgProps {
  name: string
}

const CardCityWithImg: React.FC<CardCityWithImgProps> = ({ name }) => {
  return (
    <Card>
      <CardMedia image='/images/cities/oslo.jpg' className='bs-[200px]' />
      <CardContent>
        <div className='flex items-center justify-between mb-4'>
          <Typography variant='h5' className='mbe-2'>
            {name}
          </Typography>
          <div className='flex items-center gap-2'>
            <CustomIconButton variant='outlined' color='secondary'>
              <i className={'ri-edit-2-line'} />
            </CustomIconButton>
            <CustomIconButton variant='outlined' color='error'>
              <i className={'ri-delete-bin-6-line'} />
            </CustomIconButton>
          </div>
        </div>
        <Typography>
          Oslo is the capital and most populous city of Norway. Oslo is the economic and governmental centre of Norway.
          The city is also a hub of Norwegian trade, banking, industry and shipping. It is an important centre for
          maritime industries and maritime trade in Europe.{' '}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardCityWithImg
