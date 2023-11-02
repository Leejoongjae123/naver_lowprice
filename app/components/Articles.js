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
    <Card className='h-100 rounded-3xl shadow-xl'>
      <div className='p-5 flex flex-col'>
        <div className='relative h-32'>
        <Badge className='w-full absolute right-7 top-5' badgeContent={"판교"} color="secondary"></Badge>
          <Image className='rounded-2xl' fill src="https://landthumb-phinf.pstatic.net/20170330_291/apt_realimage_1490853393012dKl3g_JPEG/315c3cb7e9417fdeccf9bfe94a204510.jpg?type=m1024"></Image>
        </div>
        <div className='h-full'>
          <h1 className='font-bold text-xl text-center items-center'>판교 푸르지오그랑블</h1>
        </div>
        <div className='h-full'>
          <Description></Description>
        </div>
        <div className='h-full'>
        <Button size="small"><a href='https://new.land.naver.com/complexes/27508?ms=37.3930242,127.1132844,17&a=APT:PRE&e=RETAIL&ad=true&articleNo=2343874600'>상세정보</a></Button>
        </div>
      </div>
    </Card>
  )
}
