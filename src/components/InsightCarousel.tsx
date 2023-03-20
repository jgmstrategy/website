import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

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
            top: '20px',
            left: '20px',
            color: 'black',
            backgroundColor: 'white'
          }}
        >
          <p>{props.item.name}</p>
          <p>{props.item.description}</p>
        </div>
      </Box>
    </Link>
  );
}