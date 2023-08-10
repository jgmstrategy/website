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
      name: 'House Passes Debt Ceiling Limit',
      description: 'Debt limit bill passed amidst concerns.',
      image: 'https://csis-website-prod.s3.amazonaws.com/s3fs-public/styles/1200x522/s3/publication/GettyImages-83951850.jpg',
      href: '/insights/debt-ceiling-limit'
    },
    {
      name: 'May Jobs Report',
      description: 'Surpassing expecatations, but really?',
      image: 'https://cdn.shopify.com/s/files/1/0746/2561/files/wall_street_1920_large.jpg',
      href: '/insights/2023-may-jobs-report'
    },
    {
      name: 'Compromise Agreement on Debt Ceiling',
      description: 'Near Compromise Agreement',
      image: 'https://portal.ehawaii.gov/assets/webp/page/government/federal/executive.webp',
      href: '/insights/debt-ceiling-compromise'
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