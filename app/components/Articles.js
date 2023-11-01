import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
export default function Articles() {
  return (
    <Card className='relative' sx={{ maxWidth: 345 }}>
      
      <Badge className='w-full absolute right-7 top-5' badgeContent={"판교"} color="secondary"></Badge>
      <div className='relative w-full'>
      
      </div>
      
      
      <CardMedia
        sx={{ height: 140 }}
        image="https://landthumb-phinf.pstatic.net/20170330_291/apt_realimage_1490853393012dKl3g_JPEG/315c3cb7e9417fdeccf9bfe94a204510.jpg?type=m1024"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">상세정보</Button>
      </CardActions>
    </Card>
  )
}
