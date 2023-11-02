import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import Image from 'next/image';
import Description from './Description'
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
          판교 푸르지오그랑블
        </Typography>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <Description></Description>
      </CardContent>
      <CardActions>
        <Button size="small"><a href='https://new.land.naver.com/complexes/27508?ms=37.3930242,127.1132844,17&a=APT:PRE&e=RETAIL&ad=true&articleNo=2343874600'>상세정보</a></Button>
      </CardActions>
    </Card>
  )
}
