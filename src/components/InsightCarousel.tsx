import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function InsightCarousel() {
  const items = [
    {
      name: 'Better Patient Experiences',
      description: 'Learn how we help build better lives in the dentist office',
      image: '/post_01.jpg',
      href: '/insights/better-patient-experiences'
    },
    {
      name: 'World Resource Report 2023',
      description: 'Navigate the constantly changing logistics landscape',
      image: '/post_02.jpg',
      href: '/insights/world-resource-report'
    },
    {
      name: 'Diversity and Generative AI',
      description: 'Making sure marginalized groups do not get left behind',
      image: '/post_03.jpg',
      href: '/insights/diversity-ai'
    }
  ];

  return (
    <Carousel
      swipe={true}
      animation='slide'
    >
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
}

type ItemProps = {
  item: {
    name: string;
    description: string;
    image: string;
    href: string;
  };
};

function Item(props: ItemProps) {
  return (
    <Link
      href={props.item.href}
    >
      <Box
        sx={{
          width: 1,
          height: 1,
          minHeight: 600
        }}
      >
        <Image
          src={props.item.image}
          alt=''
          fill
          style={{
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            color: 'black',
            justifyContent: 'center',
            bottom: 0,
            left: 0
          }}
          className='mb-4 mx-4'
        >
          <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
            <CardContent>
              <Typography variant='h4' component='div'>
                {props.item.name}
              </Typography>
              <Typography variant='body2'>
                {props.item.description}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Box>
    </Link>
  );
}