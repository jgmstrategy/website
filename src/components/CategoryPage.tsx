import { PropsWithChildren } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { expertiseType } from '@/constants/categories';
import { insightType } from '@/constants/insights';
import { people } from '@/constants/people';

const pages = ['industry', 'service'] as const;
type PageType = typeof pages[number];

type TitleDividerProps = {
  title: string;
  id?: string;
};

type CategoryPageProps = {
  name: string;
  backgroundImage: string;
  subtitle: string;
  testimonials: Array<insightType>;
  featuredInsights: Array<insightType>;
  experience: JSX.Element;
  description?: JSX.Element;
  featuredPartners?: Array<string>;
  featuredServices?: Array<expertiseType>;
  pageType: PageType;
};

const NAVBAR_TITLES = [
  'Experience',
  'Testimonials',
  'Partners',
  'Insights',
  'Services'
];

const DEFAULT_PARTNERS = [
  'Gideon Tong',
  'Maxwell Chang',
  'Jason Estabillo'
];

// TODO
const DEFAULT_SERVICES = [
];

function CategoryPageNavbar() {
  return (
    <AppBar
      position='static'
      className='d-none d-sm-block'
      sx={{
        background: 'white',
        marginY: '1rem',
        boxShadow: 'none'
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          variant='dense'
          className='justify-content-center'
          disableGutters
          sx={{
            background: 'white'
          }}
        >
          <Button disabled>
            Skip to Section
          </Button>
          {NAVBAR_TITLES.map((title) => (
            <Button key={title} sx={{ color: 'orange' }} href={'#' + title.toLowerCase()}>
              {title}
            </Button>
          ))
          }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function TitleDivider({ title, id }: TitleDividerProps) {
  return (
    <Divider
      id={id}
      sx={{
        fontSize: 30,
        fontWeight: 600,
        paddingTop: '3rem'
      }}
    >
      {title}
    </Divider>
  );
}

export default function CategoryPage(props: PropsWithChildren<CategoryPageProps>) {
  return (
    <>
      <Head>
        <title>{`${props.name} Consulting by JGM Strategy}`}</title>
      </Head>
      <div className='bg-image' style={{ height: '40rem', overflow: 'hidden' }}>
        <Image
          src={props.backgroundImage}
          alt=''
          style={{ objectFit: 'cover' }}
          fill
        />
        <div className='mask'>
          <div className='d-flex align-items-center h-100 ps-4'>
            <Paper elevation={6}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
                    {
                      props.pageType === 'industry' ?
                      'Industry Specialization' :
                      'Service and Solution'
                    }
                  </Typography>
                  <Typography variant='h5' component='div' className='pb-3'>
                    {props.name}
                  </Typography>
                  <Typography variant='body2'>
                    {props.subtitle}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </div>
        </div>
      </div>
      <CategoryPageNavbar />
      {
        props.description &&
        <Container sx={{ paddingTop: '1rem' }}>
          {props.description}
        </Container>
      }
      {props.children}
      <TitleDivider title='Experience' id='experience' />
      <Container>
        <Typography>We hope to put the experience here soon.</Typography>
      </Container>
      <TitleDivider title='Testimonials' id='testimonials' />
      <Container>
        <Typography>We hope to put the testimonials here soon.</Typography>
      </Container>
      <TitleDivider title={'Top Partners in ' + props.name} id='partners' />
      <Container>
        {
          props.featuredPartners ?
            <Typography>Featured team members will show up here soon.</Typography> :
            <Typography>The default featured team members will show up here soon.</Typography>
        }
      </Container>
      <TitleDivider title={'Latest ' + props.name + ' Insights'} id='insights' />
      <Container>
        <Typography>We hope to display the featured insights here soon.</Typography>
      </Container>
      <TitleDivider title='How We Help' id='services' />
      <Container>
        {
          props.featuredServices ?
            <Typography>We hope to have related services here soon.</Typography> :
            <Typography>We hope to show the default services here soon.</Typography>
        }
      </Container>
      <TitleDivider title='Ready to get in touch?' />
      <Container sx={{ paddingBottom: '3rem' }}>
        <Typography>We hope to have a contact form here soon.</Typography>
      </Container>
    </>
  );
}